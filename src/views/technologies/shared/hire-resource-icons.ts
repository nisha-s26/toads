import type { LucideIcon } from "lucide-react"
import {
  FaAndroid,
  FaApple,
  FaBrain,
  FaCloud,
  FaCode,
  FaLayerGroup,
  FaNodeJs,
  FaReact,
} from "react-icons/fa"
import { SiFlutter, SiMongodb } from "react-icons/si"
import type { IconType } from "react-icons"

export const HIRE_RESOURCE_ICON_MAP: Record<string, LucideIcon | IconType> = {
  ReactNative: FaReact,
  Nodejs: FaNodeJs,
  FullStack: FaLayerGroup,
  Mern: SiMongodb,
  Flutter: SiFlutter,
  AiMl: FaBrain,
  Software: FaCode,
  DevOps: FaCloud,
  Ios: FaApple,
  Android: FaAndroid,
  Reactjs: FaReact,
}
