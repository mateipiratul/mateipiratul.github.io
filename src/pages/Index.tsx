import HeroSection from "@/components/HeroSection";
import CVFrame from "@/components/CVFrame";
import ProjectGrid from "@/components/ProjectGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <CVFrame />
      <ProjectGrid />

      <footer className="text-center py-12 text-xs text-muted-foreground font-display">
        <div className="section-divider mb-8 max-w-md mx-auto" />
        © {new Date().getFullYear()} · Built by COQ
      </footer>
    </div>
  );
};

export default Index;
