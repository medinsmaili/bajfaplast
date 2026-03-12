import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Contact</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Let's Discuss Your Needs
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Whether you need custom bottle designs, bulk preform orders, or specialized closures — 
              our team is ready to help bring your vision to life.
            </p>
            <div className="space-y-6">
              {[
                { icon: Mail, text: "sales@polypack.com" },
                { icon: Phone, text: "+91 98765 43210" },
                { icon: MapPin, text: "Industrial Area, Phase II, Gujarat, India" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4 text-foreground">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-5">
              <input placeholder="Your Name" className="w-full px-4 py-3 rounded-sm border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <input placeholder="Email Address" type="email" className="w-full px-4 py-3 rounded-sm border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
            <input placeholder="Company Name" className="w-full px-4 py-3 rounded-sm border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
            <select className="w-full px-4 py-3 rounded-sm border border-border bg-card text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
              <option>Select Product Interest</option>
              <option>PET Bottles</option>
              <option>Bottle Closures</option>
              <option>PET Preforms</option>
              <option>Custom Solutions</option>
            </select>
            <textarea placeholder="Tell us about your requirements..." rows={4} className="w-full px-4 py-3 rounded-sm border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
            <button type="submit" className="w-full bg-primary text-primary-foreground py-3.5 rounded-sm font-body font-medium hover:opacity-90 transition-opacity">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
