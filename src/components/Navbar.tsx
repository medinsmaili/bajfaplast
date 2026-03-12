import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-dark/90 backdrop-blur-md border-b border-surface-dark-foreground/10">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-display text-2xl text-surface-dark-foreground tracking-tight">
          Poly<span className="text-primary">Pack</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-body text-surface-dark-foreground/80">
          <a href="#products" className="hover:text-primary transition-colors">Products</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#sustainability" className="hover:text-primary transition-colors">Sustainability</a>
          <a href="#contact" className="bg-primary text-primary-foreground px-5 py-2 rounded-sm hover:opacity-90 transition-opacity">
            Get Quote
          </a>
        </div>
        <button className="md:hidden text-surface-dark-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-surface-dark border-t border-surface-dark-foreground/10 py-4">
          <div className="container flex flex-col gap-4 text-sm font-body text-surface-dark-foreground/80">
            <a href="#products" onClick={() => setOpen(false)}>Products</a>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#sustainability" onClick={() => setOpen(false)}>Sustainability</a>
            <a href="#contact" onClick={() => setOpen(false)} className="bg-primary text-primary-foreground px-5 py-2 rounded-sm text-center">Get Quote</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
