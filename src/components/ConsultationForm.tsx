"use client";

import { useState, type FormEvent } from "react";

export default function ConsultationForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || "Something went wrong.");
      }

      setSuccess(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-gold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-charcoal mb-2">
          Thank You!
        </h3>
        <p className="text-charcoal-light">
          We&apos;ve received your inquiry and will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full bg-ivory border border-blush-dark/40 rounded-lg px-4 py-3 text-charcoal placeholder:text-charcoal-light/50 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors duration-200";

  const labelClasses =
    "block text-sm font-medium text-charcoal-light uppercase tracking-wide mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Full Name <span className="text-rose">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email <span className="text-rose">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(555) 123-4567"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="date" className={labelClasses}>
            Wedding Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="guests" className={labelClasses}>
            Estimated Guest Count
          </label>
          <select id="guests" name="guests" className={inputClasses}>
            <option value="">Select a range</option>
            <option value="Under 50">Under 50</option>
            <option value="50-100">50 – 100</option>
            <option value="100-200">100 – 200</option>
            <option value="200+">200+</option>
          </select>
        </div>

        <div>
          <label htmlFor="referral" className={labelClasses}>
            How Did You Hear About Us?
          </label>
          <select id="referral" name="referral" className={inputClasses}>
            <option value="">Select an option</option>
            <option value="Instagram">Instagram</option>
            <option value="Referral">Referral</option>
            <option value="Wedding Wire">Wedding Wire</option>
            <option value="Google">Google</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message <span className="text-rose">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your dream wedding..."
          className={inputClasses + " resize-none"}
        />
      </div>

      {error && (
        <p className="text-rose text-sm text-center">{error}</p>
      )}

      <div className="text-center">
        <button
          type="submit"
          disabled={loading}
          className="bg-gold text-white rounded-full px-8 py-4 text-lg font-medium hover:bg-gold-light hover:text-charcoal transition-all duration-300 shadow-lg shadow-gold/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Request Your Consultation"}
        </button>
      </div>
    </form>
  );
}
