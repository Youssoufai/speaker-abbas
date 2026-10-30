"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = String(data.get("subject") || "");
    const body = `From: ${data.get("name")} <${data.get("email")}>\n\n${data.get("message")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div className="grid gap-16 md:grid-cols-2 md:gap-24">
      <div>
        <Reveal>
          <h2 className="font-display text-3xl tracking-tight text-ink">
            The Office
          </h2>
          <p className="mt-4 max-w-md text-[14px] leading-relaxed text-ink-soft/70">
            {site.contactNote}
          </p>
        </Reveal>
        <div className="mt-10 space-y-6">
          {[
            { icon: MapPin, text: site.address },
            { icon: MapPin, text: site.constituencyAddress },
            { icon: Mail, text: site.email },
            { icon: Phone, text: site.phone },
          ].map(({ icon: Icon, text }, i) => (
            <Reveal key={text} delay={i * 0.06} className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-forest">
                <Icon className="h-4 w-4" strokeWidth={1.5} />
              </span>
              <p className="pt-2 text-[15px] text-ink-soft/80">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal variant="right">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-line bg-paper-dim p-10 text-center"
          >
            <p className="font-display text-xl text-ink">Thank you.</p>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-soft/70">
              The office of {site.name} is glad to hear from you.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <Field label="Full Name" id="name" />
            <Field label="Email Address" id="email" type="email" />
            <Field label="Subject" id="subject" />
            <div>
              <label
                htmlFor="message"
                className="text-[12px] uppercase tracking-[0.14em] text-ink-soft/60"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-2 w-full border-b border-line bg-transparent py-2 text-[15px] text-ink outline-none transition-colors focus:border-forest"
              />
            </div>
            <Button type="submit" variant="primary">
              Send message
            </Button>
          </form>
        )}
      </Reveal>
    </div>
  );
}

function Field({ label, id, type = "text" }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-[12px] uppercase tracking-[0.14em] text-ink-soft/60"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        className="mt-2 w-full border-b border-line bg-transparent py-2 text-[15px] text-ink outline-none transition-colors focus:border-forest"
      />
    </div>
  );
}
