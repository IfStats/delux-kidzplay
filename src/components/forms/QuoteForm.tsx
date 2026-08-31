"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { services } from "@/data/services";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  service: "",
  location: "",
  timeline: "",
  budget: "",
  message: "",
};

export default function QuoteForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get("service");

    if (service) {
      setForm((current) => ({
        ...current,
        service,
      }));
    }
  }, []);

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    /*
     * Temporary submission handler.
     * Connect to the final email/form backend after client approval.
     */
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-[32px] bg-[var(--delux-green-light)] p-10 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--delux-green)] text-white">
          <CheckCircle2 size={32} />
        </div>

        <h2 className="mt-6 text-3xl font-black text-[var(--delux-blue)]">
          Quote Request Received!
        </h2>

        <p className="mx-auto mt-3 max-w-lg leading-7 text-slate-600">
          Thank you for telling us about your project. The Delux Kidzplay team
          will review your enquiry and get back to you.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[32px] bg-white p-6 shadow-xl sm:p-10"
    >
      <div>
        <span className="section-eyebrow">Project Details</span>

        <h2 className="mt-2 text-3xl font-black text-[var(--delux-blue)]">
          Tell Us About Your Project
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          The more information you provide, the better we can understand your
          requirements.
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="form-label">
            Full Name *
          </label>

          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="form-label">
            Email Address *
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="form-label">
            Phone Number *
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="055 000 0000"
          />
        </div>

        <div>
          <label htmlFor="organization" className="form-label">
            School / Organization
          </label>

          <input
            id="organization"
            name="organization"
            value={form.organization}
            onChange={handleChange}
            className="form-input"
            placeholder="Organization name"
          />
        </div>

        <div>
          <label htmlFor="service" className="form-label">
            Service *
          </label>

          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            required
            className="form-input bg-white"
          >
            <option value="">Select a service</option>

            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="location" className="form-label">
            Project Location
          </label>

          <input
            id="location"
            name="location"
            value={form.location}
            onChange={handleChange}
            className="form-input"
            placeholder="City / area"
          />
        </div>

        <div>
          <label htmlFor="timeline" className="form-label">
            Expected Timeline
          </label>

          <select
            id="timeline"
            name="timeline"
            value={form.timeline}
            onChange={handleChange}
            className="form-input bg-white"
          >
            <option value="">Select timeline</option>
            <option value="urgent">As soon as possible</option>
            <option value="1-3-months">1–3 months</option>
            <option value="3-6-months">3–6 months</option>
            <option value="6-plus-months">6+ months</option>
            <option value="planning">Still planning</option>
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="form-label">
            Estimated Budget
          </label>

          <select
            id="budget"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className="form-input bg-white"
          >
            <option value="">Prefer not to say</option>
            <option value="under-10k">Under GHS 10,000</option>
            <option value="10k-50k">GHS 10,000 – 50,000</option>
            <option value="50k-100k">GHS 50,000 – 100,000</option>
            <option value="100k-plus">GHS 100,000+</option>
            <option value="unknown">Not sure yet</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="form-label">
          Tell Us About the Project *
        </label>

        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={7}
          className="form-input resize-none"
          placeholder="Describe the playground, recreational space or event you have in mind..."
        />
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--delux-green)] px-6 py-4 text-sm font-black uppercase tracking-wide text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[var(--delux-green-dark)]"
      >
        Request My Quote
        <Send size={17} />
      </button>

      <p className="mt-4 text-center text-xs leading-5 text-slate-400">
        Your information will only be used to respond to your enquiry.
      </p>
    </form>
  );
}