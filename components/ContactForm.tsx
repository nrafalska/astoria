'use client';

import { FormEvent, useState } from 'react';

const initialState = { name: '', email: '', message: '' };

export default function ContactForm() {
  const [formState, setFormState] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setFormState(initialState);
  };

  return (
    <form className="panel contact-form" onSubmit={onSubmit} aria-label="Contact Adstera">
      <h3>Let&apos;s talk growth</h3>
      <p>Tell us what you need and we&apos;ll get back to you quickly.</p>

      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        autoComplete="name"
        value={formState.name}
        onChange={(event) =>
          setFormState((prev) => ({ ...prev, name: event.target.value }))
        }
        required
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        value={formState.email}
        onChange={(event) =>
          setFormState((prev) => ({ ...prev, email: event.target.value }))
        }
        required
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        rows={5}
        value={formState.message}
        onChange={(event) =>
          setFormState((prev) => ({ ...prev, message: event.target.value }))
        }
        required
      />

      <button className="btn btn-primary" type="submit">
        Submit
      </button>

      {submitted && (
        <p className="success" role="status" aria-live="polite">
          Thanks — your message was sent successfully.
        </p>
      )}
    </form>
  );
}
