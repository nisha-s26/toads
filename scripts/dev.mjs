import { rmSync } from "node:fs"
import { execSync } from "node:child_process"
import path from "node:path"
import { spawn } from "node:child_process"
import { fileURLToPath } from "node:url"

const projectRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")
const nextBin = path.join(projectRoot, "node_modules", "next", "dist", "bin", "next")
const devPort = process.env.PORT ?? "3000"
const devPorts = [3000, 3001, 3002, 3003]

function sleep(ms) {
  try {
    if (process.platform === "win32") {
      execSync(`powershell -NoProfile -Command "Start-Sleep -Milliseconds ${ms}"`, { stdio: "ignore" })
      return
    }
    execSync(`sleep ${Math.ceil(ms / 1000)}`, { stdio: "ignore" })
  } catch {
    // Best-effort delay only.
  }
}

function freeDevPort(port) {
  try {
    if (process.platform === "win32") {
      const output = execSync(`netstat -ano | findstr :${port}`, { encoding: "utf8" })
      const pids = new Set(
        output
          .split(/\r?\n/)
          .map((line) => line.trim().split(/\s+/).pop())
          .filter((pid) => pid && /^\d+$/.test(pid) && pid !== "0"),
      )
      for (const pid of pids) {
        try {
          execSync(`taskkill /F /PID ${pid}`, { stdio: "ignore" })
          console.log(`Stopped process ${pid} on port ${port}`)
        } catch {
          // Process may have already exited.
        }
      }
      return
    }

    execSync(`lsof -ti tcp:${port} | xargs kill -9`, { stdio: "ignore", shell: true })
  } catch {
    // Port is already free.
  }
}

function freeDevPorts(ports) {
  for (const port of ports) {
    freeDevPort(port)
  }
}

function clearNextCache() {
  const nextDir = path.join(projectRoot, ".next")

  try {
    rmSync(nextDir, { recursive: true, force: true, maxRetries: 8, retryDelay: 400 })
    console.log("Cleared .next cache")
    return
  } catch {
    if (process.platform === "win32") {
      try {
        execSync(
          `powershell -NoProfile -Command "if (Test-Path '${nextDir.replace(/'/g, "''")}') { Remove-Item -LiteralPath '${nextDir.replace(/'/g, "''")}' -Recurse -Force }"`,
          { stdio: "ignore" },
        )
        console.log("Cleared .next cache")
        return
      } catch (error) {
        console.warn(`Could not fully clear .next cache: ${error instanceof Error ? error.message : error}`)
        return
      }
    }

    console.warn("Could not fully clear .next cache")
  }
}

const shouldClean = process.argv.includes("--clean")

if (shouldClean) {
  freeDevPorts(devPorts)
  if (process.platform === "win32") {
    sleep(800)
  }
  clearNextCache()
}

// Turbopack HMR on Windows frequently corrupts .next manifests; webpack is the stable default.
const useTurbopack =
  process.argv.includes("--turbopack") ||
  (process.env.TURBOPACK === "1" && !process.argv.includes("--webpack"))
const useWebpack = process.argv.includes("--webpack") || (process.platform === "win32" && !useTurbopack)
const args = ["dev", ...(!useWebpack ? ["--turbopack"] : []), "-p", devPort]

if (useWebpack && process.platform === "win32") {
  console.log("Using webpack dev server (stable on Windows). Pass --turbopack to opt in.")
}

const child = spawn(process.execPath, [nextBin, ...args], {
  cwd: projectRoot,
  stdio: "inherit",
  env: process.env,
})

child.on("exit", (code) => process.exit(code ?? 0))
