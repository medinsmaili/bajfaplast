import { Leaf, Recycle, Droplets } from "lucide-react";

const SustainabilitySection = () => {
  return (
    <section id="sustainability" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase font-semibold mb-3">
            Always Listening. Always Innovating. Always Improving.
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sustainability & Innovation
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            We are committed to reducing environmental impact through innovation in materials,
            processes, and product design.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Leaf,
              title: "Eco-Friendly Materials",
              desc: "Using recycled PET (rPET) and bio-based resins to minimize our environmental footprint while maintaining product quality.",
            },
            {
              icon: Recycle,
              title: "Circular Economy",
              desc: "Designing bottles and closures for maximum recyclability, supporting a closed-loop packaging lifecycle.",
            },
            {
              icon: Droplets,
              title: "Lightweight Design",
              desc: "Advanced engineering to reduce material usage by up to 30% without compromising performance or durability.",
            },
          ].map((item) => (
            <div key={item.title} className="border border-border rounded-lg p-8 hover:shadow-lg transition-shadow bg-card">
              <item.icon className="w-10 h-10 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="font-display font-bold text-lg text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
