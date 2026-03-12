import solidsImg from "@/assets/packaging-solids.jpg";
import liquidsImg from "@/assets/packaging-liquids.jpg";
import allImg from "@/assets/packaging-all.jpg";
import bottlesImg from "@/assets/bottles-production.jpg";
import closuresImg from "@/assets/closures-production.jpg";

const categories = [
  {
    title: "Packaging for Solids",
    image: solidsImg,
    alt: "Plastic bottle with pills and capsules",
  },
  {
    title: "Packaging for Liquids",
    image: liquidsImg,
    alt: "Plastic bottle for liquid products",
  },
  {
    title: "All Packaging",
    image: allImg,
    alt: "Personal care plastic packaging",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-background">
      {/* Category cards with green diagonal background */}
      <div className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-primary" style={{ clipPath: "polygon(0 15%, 100% 0%, 100% 85%, 0% 100%)" }} />
        <div className="container relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <a
                key={cat.title}
                href="#"
                className="group block bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.alt}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {cat.title}
                  </h3>
                  <span className="text-primary text-sm font-semibold">View All →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Plastic Bottles section */}
      <div className="container mt-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Plastic Bottles
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Plastic bottles are the packaging choice for many medicines, supplements, and lifestyle products.
              At Bajfa Plast, we've built a large selection of bottle molds, ideal for those times when a
              quick production-ready solution is critical. However, sometimes one of these bottles just won't do.
              What you may want is a customized solution for your product. We make it easy to get exactly what you need.
            </p>
            <a href="#" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded font-display font-semibold text-sm hover:opacity-90 transition-opacity">
              Search Plastic Bottles
            </a>
          </div>
          <div className="lg:w-1/2">
            <img
              src={bottlesImg}
              alt="White round bottles on manufacturing line"
              className="w-full h-80 object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Plastic Closures section */}
      <div className="container mt-20">
        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Plastic Closures
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Every plastic bottle requires a closure to complete the packaging system, keep the product
              inside secure, and provide child resistance when necessary. We manufacture a wide variety of
              compatible closures: continuous thread, snap cap, dispensing, as well as child resistant styles.
              Our team can help you determine which closure is the right choice.
            </p>
            <a href="#" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded font-display font-semibold text-sm hover:opacity-90 transition-opacity">
              Search Plastic Closures
            </a>
          </div>
          <div className="lg:w-1/2">
            <img
              src={closuresImg}
              alt="White closures dropping into manufacturing line"
              className="w-full h-80 object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
