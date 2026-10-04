import { useState } from "react";
import { profile } from "../data/profile.js";

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;

const emptyForm = { name: "", email: "", phone: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  // "idle" | "sending" | "sent" | "error"
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!FORMSPREE_ID) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          _subject: form.subject || `Portfolio message from ${form.name}`,
          _replyto: form.email,
        }),
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
      setForm(emptyForm);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="contact" id="contact">
      <h2>
        Contact <span>Me</span>
      </h2>
      <h3>Let's work together</h3>
      <form onSubmit={handleSubmit}>
        <div className="left">
          <input
            type="text"
            name="name"
            placeholder="Full name"
            required
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
          />
        </div>
        <div className="right">
          <textarea
            name="message"
            cols="50"
            rows="8"
            placeholder="Your message"
            required
            value={form.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>

      <div className="form-status" aria-live="polite">
        {status === "sent" && (
          <p className="success">✅Message sent🎉 I'll get back to you soon.</p>
        )}
        {status === "error" && (
          <p className="error">
            Sorry, the message couldn't be sent. Please email me directly at{" "}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>.
          </p>
        )}
      </div>

      <p className="mailto">
        Prefer your own mail app?{" "}
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </p>
    </section>
  );
}
