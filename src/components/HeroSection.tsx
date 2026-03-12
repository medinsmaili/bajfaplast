import heroImg from "@/assets/hero-worker.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-background">
      {/* Top headline */}
      <div className="text-center py-6">
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
          Manufacturing Consistently High-Quality Plastic Packaging
        </h1>
      </div>

      {/* Hero content */}
      <div className="container relative">
        <div className="flex flex-col lg:flex-row items-stretch gap-0">
          {/* Text overlay card */}
          <div className="bg-accent text-accent-foreground p-8 md:p-12 lg:max-w-md flex flex-col justify-center z-10 lg:-mr-16 relative">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Experience a True Partnership
            </h2>
            <p className="text-accent-foreground/90 leading-relaxed">
              Our boutique-style business is large enough to meet the most demanding bottle and closure
              packaging system requests, but small enough to care about the success of your business.{" "}
              <a href="#contact" className="underline font-semibold hover:text-primary-foreground">
                Contact us
              </a>.
            </p>
          </div>

          {/* Hero image */}
          <div className="flex-1">
            <img
              src={heroImg}
              alt="Bajfa Plast manufacturing facility worker"
              className="w-full h-72 md:h-96 lg:h-[440px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
