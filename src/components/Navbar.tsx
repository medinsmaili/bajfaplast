import { useState } from "react";
import { Menu, X, Search, User, ShoppingCart } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Custom Design", href: "#custom" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-2">
          <span className="font-display text-2xl font-extrabold tracking-tight text-foreground">
            BAJFA <span className="text-primary">PLAST</span>
          </span>
          <span className="hidden sm:block text-[10px] text-muted-foreground leading-tight border-l border-border pl-2 ml-1">
            Quality. Process.<br />Perfection.
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8 text-sm font-display font-semibold text-foreground">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-primary transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4 text-foreground">
          <button className="hover:text-primary transition-colors"><Search size={20} /></button>
          <button className="hover:text-primary transition-colors"><User size={20} /></button>
          <button className="hover:text-primary transition-colors relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">0</span>
          </button>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border py-4">
          <div className="container flex flex-col gap-4 text-sm font-display font-semibold text-foreground">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="py-1 hover:text-primary">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
