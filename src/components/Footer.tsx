const Footer = () => {
  return (
    <footer className="bg-surface-dark border-t border-surface-dark-foreground/10">
      {/* Career CTA bar */}
      <div className="bg-primary/10 border-b border-primary/20">
        <div className="container flex flex-col sm:flex-row items-center justify-between py-4 gap-4">
          <p className="text-primary font-display font-semibold text-sm">
            Join Our Team! Our manufacturing plants are safe, clean, and friendly.
          </p>
          <a href="#" className="border border-primary text-primary px-6 py-2 rounded font-display font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
            View Career Opportunities →
          </a>
        </div>
      </div>

      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <a href="#" className="font-display text-2xl font-extrabold text-surface-dark-foreground">
            BAJFA <span className="text-primary">PLAST</span>
          </a>
          <div className="flex gap-8 text-sm text-surface-dark-foreground/60 font-display font-semibold">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#products" className="hover:text-primary transition-colors">Products</a>
            <a href="#sustainability" className="hover:text-primary transition-colors">Sustainability</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
        <div className="border-t border-surface-dark-foreground/10 mt-8 pt-8 text-center text-sm text-surface-dark-foreground/40">
          © 2026 Bajfa Plast. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
