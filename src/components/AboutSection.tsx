import { Factory, Award, Recycle, Globe } from "lucide-react";

const stats = [
  { icon: Factory, label: "Production Capacity", value: "50M+ Units/Year" },
  { icon: Award, label: "ISO Certified", value: "9001 & 22000" },
  { icon: Recycle, label: "Recyclable", value: "100% PET" },
  { icon: Globe, label: "Countries Served", value: "25+" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">About Us</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Trusted by Leading Brands
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            With over two decades of experience in PET packaging, we combine cutting-edge technology 
            with rigorous quality standards to deliver packaging solutions that protect your products and elevate your brand.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-card rounded-lg p-8 text-center shadow-sm border border-border">
              <s.icon className="w-8 h-8 text-primary mx-auto mb-4" strokeWidth={1.5} />
              <p className="font-display text-2xl text-foreground mb-1">{s.value}</p>
              <p className="text-muted-foreground text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
