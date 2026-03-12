import clearBottlesImg from "@/assets/clear-bottles.jpg";

const stats = [
  { value: "25+", label: "Years of Manufacturing Experience" },
  { value: "3", label: "Manufacturing Facilities" },
  { value: "500+", label: "Unique Packaging Products" },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Perfect Packaging Solutions for Your Products
        </h2>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 mt-12 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-5xl md:text-6xl font-extrabold text-primary animate-count-up">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm mt-2 max-w-[180px]">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="rounded-lg overflow-hidden shadow-xl">
          <img
            src={clearBottlesImg}
            alt="Clear PET bottles on production line"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
