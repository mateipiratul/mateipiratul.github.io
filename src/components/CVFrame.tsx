import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const CVFrame = () => {
  return (
    <section className="px-6 py-20 max-w-4xl mx-auto">
      <div className="section-divider mb-16" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <FileText size={20} className="text-primary" />
          <h2 className="text-2xl font-display font-bold text-foreground">Curriculum Vitae</h2>
        </div>

        <div className="border border-border rounded-lg overflow-hidden bg-card/30 border-glow">
          <iframe
            src="/cv.pdf"
            title="Curriculum Vitae"
            className="w-full h-[700px]"
          />
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          If the PDF does not load, you can <a href="/cv.pdf" target="_blank" rel="noreferrer" className="text-primary underline">download it here</a>.
        </p>
      </motion.div>
    </section>
  );
};

export default CVFrame;
