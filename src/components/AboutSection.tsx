import { Zap, Heart, Shield, CheckCircle, Star } from "lucide-react";
import teamImg from "@/assets/team-photo.jpg";

const values = [
  { icon: Zap, title: "Responsiveness", desc: "We'll get you what you need quickly." },
  { icon: Heart, title: "Courtesy", desc: "We'll treat you in a respectful, friendly manner." },
  { icon: Shield, title: "Integrity", desc: "We'll have your best interests in mind." },
  { icon: CheckCircle, title: "Dependability", desc: "We'll do exactly what we say we'll do." },
  { icon: Star, title: "Perfection", desc: "We'll make perfect bottles and closures every time." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-surface-dark">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-surface-dark-foreground mb-4">
            Experience a Plastic Packaging Partnership
          </h2>
          <p className="text-surface-dark-foreground/70 text-lg max-w-3xl mx-auto leading-relaxed">
            Bajfa Plast has been family-owned since its founding. Our boutique-style business is large enough to
            meet the most demanding plastic packaging requests, but small enough to care about the success of
            your business and your employees. We make plastic packaging that is functional, easy to use, and
            protects the product inside.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {values.map((v) => (
            <div key={v.title} className="text-center p-6">
              <v.icon className="w-10 h-10 text-primary mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-display font-bold text-surface-dark-foreground mb-2">{v.title}</h3>
              <p className="text-surface-dark-foreground/60 text-sm">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <img
              src={teamImg}
              alt="Bajfa Plast team in manufacturing plant"
              className="w-full h-72 md:h-96 object-cover rounded-lg shadow-xl"
            />
          </div>
          <div className="lg:w-1/2">
            <p className="text-surface-dark-foreground/80 text-lg leading-relaxed mb-6">
              Not only are our bottles and closures made with pride, but our product consistency and repeatable
              quality would not be possible without our dedicated employees and positive work environment.
            </p>
            <a href="#contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded font-display font-semibold text-sm hover:opacity-90 transition-opacity">
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
