import petBottlesImg from "@/assets/pet-bottles.jpg";
import closuresImg from "@/assets/closures.jpg";
import preformsImg from "@/assets/preforms.jpg";

const products = [
  {
    title: "PET Bottles",
    description: "Custom-designed PET bottles for water, carbonated drinks, juices, edible oils, and more. Available from 200ml to 5L.",
    features: ["Lightweight & durable", "Crystal clear transparency", "Custom mold design", "BPA-free material"],
    image: petBottlesImg,
    alt: "PET plastic bottles in various sizes",
  },
  {
    title: "Bottle Closures",
    description: "High-quality caps and closures ensuring tamper-evidence and leak-proof sealing for all bottle types.",
    features: ["Tamper-evident designs", "Multiple colors available", "PCO & ROPP neck finishes", "Child-resistant options"],
    image: closuresImg,
    alt: "Colorful bottle closures and caps",
  },
  {
    title: "PET Preforms",
    description: "Precision-engineered PET preforms manufactured with the latest injection molding technology for consistent quality.",
    features: ["Wide range of gram weights", "Multiple neck finishes", "Consistent wall thickness", "100% virgin PET resin"],
    image: preformsImg,
    alt: "PET preforms for bottle manufacturing",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3 text-center">Our Products</p>
        <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-16">
          Packaging Excellence
        </h2>
        <div className="space-y-24">
          {products.map((product, i) => (
            <div
              key={product.title}
              className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="overflow-hidden rounded-lg shadow-xl">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="font-display text-3xl text-foreground mb-4">{product.title}</h3>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{product.description}</p>
                <ul className="grid grid-cols-2 gap-3">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
