import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function GetStarted() {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-page-bg py-20 md:py-24">
      {/* Background gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-toadster-green/10 via-transparent to-toadster-green/5 dark:from-[#2ECC71]/12 dark:via-transparent dark:to-[#006600]/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-toadster-green/20 blur-3xl dark:bg-[#2ECC71]/25"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#006600]/15 blur-3xl dark:bg-[#1C3829]/40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[min(100%,56rem)] -translate-x-1/2 translate-y-1/3 rounded-full bg-linear-to-r from-transparent via-toadster-green/15 to-transparent blur-2xl dark:via-[#2ECC71]/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(0,102,0,0.08) 0%, transparent 45%), radial-gradient(circle at 80% 70%, rgba(46,204,113,0.1) 0%, transparent 40%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">

        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-page-fg leading-tight"
        >
          Ready to Build{" "}
          <span className="text-toadster-green">
            Intelligent Systems?
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-page-fg-subtle text-lg max-w-2xl mx-auto"
        >
          Let's partner to design and build the AI-powered future your business
          deserves.
        </motion.p>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Button 
            variant={"default"} 
            style={{padding:"1.5rem 3rem"}}
            className="group"
            onClick={() => navigate('/contact')}
          >
            Get Started Today
            <ChevronRight 
              size={32} 
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Button>
        </motion.div>

        {/* Feature Points */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-8 text-page-fg-subtle text-sm"
        >

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-toadster-green rounded-full"></span>
            No Lock-in
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-toadster-green rounded-full"></span>
            Enterprise Ready
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-toadster-green rounded-full"></span>
            24/7 Support
          </div>
        </motion.div>

      </div>
    </section>
  );
}