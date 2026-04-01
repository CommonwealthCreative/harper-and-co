import FadeIn from "./FadeIn";

const galleryItems = [
  {
    gradient: "from-blush to-rose/60",
    label: "The Rosewood Estate",
    date: "June 2025",
    aspect: "aspect-[3/4]",
  },
  {
    gradient: "from-gold-light to-gold/50",
    label: "Vineyard Ceremony",
    date: "September 2025",
    aspect: "aspect-square",
  },
  {
    gradient: "from-cream-dark to-blush",
    label: "Garden Reception",
    date: "May 2025",
    aspect: "aspect-[3/4]",
  },
  {
    gradient: "from-rose/40 to-blush-dark",
    label: "Lakeside Celebration",
    date: "August 2025",
    aspect: "aspect-square",
  },
  {
    gradient: "from-gold/30 to-cream-dark",
    label: "Historic Ballroom",
    date: "October 2025",
    aspect: "aspect-[3/4]",
  },
  {
    gradient: "from-blush-dark to-rose/50",
    label: "Intimate Elopement",
    date: "April 2025",
    aspect: "aspect-square",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-rose font-bold mb-4">
              Our Work
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-charcoal">
              A Glimpse of Our Celebrations
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <FadeIn key={item.label} delay={i * 100}>
              <div
                className={`group relative ${item.aspect} rounded-xl bg-gradient-to-br ${item.gradient} overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300`}
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-300 flex items-end p-4">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    <p className="text-white font-[family-name:var(--font-playfair)] text-lg">
                      {item.label}
                    </p>
                    <p className="text-white/70 text-sm">{item.date}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
