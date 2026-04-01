import FadeIn from "./FadeIn";

const testimonials = [
  {
    quote:
      "Harper made our wedding day absolutely magical. She anticipated every need before we even knew we had one. We were completely stress-free and able to enjoy every single moment.",
    couple: "Emily & James",
    details: "October 2025 | Charlottesville, VA",
  },
  {
    quote:
      "From our very first call, we knew Harper was special. Her attention to detail and calm energy made the entire process a joy. Our wedding was beyond anything we could have imagined.",
    couple: "Sarah & Michael",
    details: "June 2025 | The Rosewood Estate",
  },
  {
    quote:
      "Our guests are still talking about how beautiful everything was. Harper's design eye is extraordinary, and her coordination was flawless. She is worth every penny.",
    couple: "Rachel & David",
    details: "September 2025 | Napa Valley, CA",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream-dark py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-rose font-bold mb-4">
              Love Notes
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-charcoal">
              Kind Words from Happy Couples
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <FadeIn key={t.couple} delay={i * 150}>
              <div className="bg-ivory rounded-2xl p-8 shadow-sm border border-blush/40 h-full flex flex-col">
                {/* Gold quote mark */}
                <span className="font-[family-name:var(--font-playfair)] text-5xl text-gold/30 leading-none mb-2">
                  &ldquo;
                </span>
                <p className="text-charcoal-light leading-relaxed italic flex-1">
                  {t.quote}
                </p>
                <div className="mt-6 pt-4 border-t border-gold/20">
                  <p className="font-[family-name:var(--font-playfair)] text-charcoal font-semibold">
                    {t.couple}
                  </p>
                  <p className="text-sm text-charcoal-light mt-1">
                    {t.details}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
