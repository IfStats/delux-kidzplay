"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

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
     * We will connect this to the chosen email/form service
     * once the client confirms the preferred receiving email.
     */
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-[30px] bg-[var(--delux-green-light)] p-8 text-center sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--delux-green)] text-white">
          <CheckCircle2 size={32} />
        </div>

        <h3 className="mt-6 text-2xl font-black text-[var(--delux-blue)]">
          Thank You!
        </h3>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">
          Your enquiry has been received. We'll be in touch with you shortly.
        </p>

        <button
          type="button"
          onClick={() => {
            setForm(initialForm);
            setSubmitted(false);
          }}
          className="mt-6 rounded-full bg-[var(--delux-green)] px-6 py-3 text-sm font-black text-white"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[30px] bg-white p-6 shadow-xl sm:p-8"
    >
      <h2 className="text-2xl font-black text-[var(--delux-blue)]">
        Send Us a Message
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        Tell us what you're looking for and we'll get back to you.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="text-sm font-bold text-slate-700"
          >
            Full Name *
          </label>

          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[var(--delux-green)] focus:ring-2 focus:ring-[var(--delux-green)]/10"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-sm font-bold text-slate-700"
          >
            Email Address *
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[var(--delux-green)] focus:ring-2 focus:ring-[var(--delux-green)]/10"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="text-sm font-bold text-slate-700"
          >
            Phone Number *
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[var(--delux-green)] focus:ring-2 focus:ring-[var(--delux-green)]/10"
            placeholder="055 000 0000"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="text-sm font-bold text-slate-700"
          >
            Service Interested In
          </label>

          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[var(--delux-green)] focus:ring-2 focus:ring-[var(--delux-green)]/10"
          >
            <option value="">Select a service</option>
            <option value="playground-equipment">
              Playground Equipment Supply & Installation
            </option>
            <option value="school-playground">
              School Playground Design & Setup
            </option>
            <option value="kids-funfairs">
              Kids Funfairs & Entertainment Events
            </option>
            <option value="school-recreation">
              School-Based Recreational Programs
            </option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className="text-sm font-bold text-slate-700"
        >
          Message *
        </label>

        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={6}
          className="mt-2 w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[var(--delux-green)] focus:ring-2 focus:ring-[var(--delux-green)]/10"
          placeholder="Tell us about your project or enquiry..."
        />
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--delux-green)] px-6 py-4 text-sm font-black uppercase tracking-wide text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[var(--delux-green-dark)]"
      >
        Send Enquiry
        <Send size={17} />
      </button>
    </form>
  );
}