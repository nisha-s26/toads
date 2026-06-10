import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function GetStarted() {
  const navigate = useNavigate();
  return (
    <section className="relative py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center">

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