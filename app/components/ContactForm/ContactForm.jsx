"use client";

import { useState } from "react";
import { InputWithLabel } from "./InputWithLabel";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError("");
    setResponseMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setResponseMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setResponseMessage("Your message has been sent successfully!");
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        const data = await res.json();
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center mx-auto mt-10 text-white p-2 md:p-6 bg-black bg-opacity-90 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      {responseMessage && (
        <div className="mb-4 p-3 bg-green-100 text-green-800 rounded">
          {responseMessage}
        </div>
      )}
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-800 rounded">{error}</div>
      )}
      <form
        className=""
        onSubmit={handleSubmit}>
        <InputWithLabel
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}>
          Navn
        </InputWithLabel>

        <InputWithLabel
          type="email"
          name="email"
          placeholder="example@example.com"
          value={form.email}
          onChange={handleChange}>
          Email
        </InputWithLabel>

        <InputWithLabel
          type="text"
          name="subject"
          placeholder="Ex. Membership"
          value={form.subject}
          onChange={handleChange}>
          Subject
        </InputWithLabel>

        <InputWithLabel
          type="textarea"
          name="message"
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}>
          Message
        </InputWithLabel>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full p-2 bg-primary text-white font-semibold rounded hover:bg-red-500 transition duration-200">
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export const AltContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError("");
    setResponseMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setResponseMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setResponseMessage("Your message has been sent successfully!");
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        const data = await res.json();
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full relative z-10">
      {responseMessage && (
        <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 text-green-200 rounded-xl">
          {responseMessage}
        </div>
      )}
      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-200 rounded-xl">
          {error}
        </div>
      )}
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit}>
        <InputWithLabel
          type="text"
          name="name"
          placeholder="Ditt navn"
          value={form.name}
          onChange={handleChange}>
          Navn
        </InputWithLabel>

        <InputWithLabel
          type="email"
          name="email"
          placeholder="din@epost.no"
          value={form.email}
          onChange={handleChange}>
          E-post
        </InputWithLabel>

        <InputWithLabel
          type="text"
          name="subject"
          placeholder="Hva gjelder det?"
          value={form.subject}
          onChange={handleChange}>
          Emne
        </InputWithLabel>

        <InputWithLabel
          type="textarea"
          name="message"
          placeholder="Beskriv oppdraget..."
          value={form.message}
          onChange={handleChange}>
          Melding
        </InputWithLabel>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-4 cursor-pointer py-4 bg-KVS-primary hover:bg-KVS-secondary hover:text-KVS-black text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed border border-white/5">
          {isSubmitting ? "Sender..." : "Send Melding"}
        </button>
      </form>
    </div>
  );
};
