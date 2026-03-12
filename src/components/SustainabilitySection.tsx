const SustainabilitySection = () => {
  return (
    <section id="sustainability" className="py-24 bg-surface-dark">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Sustainability</p>
          <h2 className="font-display text-4xl md:text-5xl text-surface-dark-foreground mb-6">
            Committed to a Greener Future
          </h2>
          <p className="text-surface-dark-foreground/70 text-lg leading-relaxed mb-12">
            PET is the most recycled plastic in the world. We are committed to reducing environmental impact 
            through lightweight designs, recycled PET (rPET) integration, and energy-efficient manufacturing processes.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Lightweight Design", desc: "Up to 30% weight reduction without compromising strength, reducing transport emissions." },
              { title: "rPET Integration", desc: "Our preforms support up to 100% recycled PET content for a circular economy." },
              { title: "Zero Waste Goal", desc: "Advanced manufacturing processes with 99.5% material utilization rate." },
            ].map((item) => (
              <div key={item.title} className="border border-surface-dark-foreground/15 rounded-lg p-6">
                <h3 className="font-display text-xl text-surface-dark-foreground mb-3">{item.title}</h3>
                <p className="text-surface-dark-foreground/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
