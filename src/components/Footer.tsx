const Footer = () => {
  return (
    <footer className="bg-surface-dark border-t border-surface-dark-foreground/10 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <a href="#" className="font-display text-2xl text-surface-dark-foreground">
            Poly<span className="text-primary">Pack</span>
          </a>
          <div className="flex gap-8 text-sm text-surface-dark-foreground/60">
            <a href="#products" className="hover:text-primary transition-colors">Products</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#sustainability" className="hover:text-primary transition-colors">Sustainability</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
        <div className="border-t border-surface-dark-foreground/10 mt-8 pt-8 text-center text-sm text-surface-dark-foreground/40">
          © 2026 PolyPack Industries. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
