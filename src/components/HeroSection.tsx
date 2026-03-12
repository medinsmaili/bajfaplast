import heroImage from "@/assets/hero-bottles.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="PET bottles collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-surface-dark/70" />
      </div>
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
            Premium Packaging Solutions
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-surface-dark-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            PET Bottles, Closures & Preforms
          </h1>
          <p className="text-surface-dark-foreground/80 text-lg md:text-xl max-w-xl mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Delivering world-class PET packaging for beverages, food, pharmaceuticals, and personal care industries.
          </p>
          <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
            <a href="#products" className="bg-primary text-primary-foreground px-8 py-3.5 rounded-sm font-body font-medium hover:opacity-90 transition-opacity">
              View Products
            </a>
            <a href="#contact" className="border border-surface-dark-foreground/30 text-surface-dark-foreground px-8 py-3.5 rounded-sm font-body font-medium hover:bg-surface-dark-foreground/10 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
