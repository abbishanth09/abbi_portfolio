import emailjs from '@emailjs/browser';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FormEvent, useState } from 'react';
import { site } from '../data/site';

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialForm: FormState = {
  name: '',
  email: '',
  message: '',
};

export function ContactSection() {
  const reduceMotion = useReducedMotion();
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim()) nextErrors.name = 'Name is required.';
    if (!form.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      nextErrors.email = 'Please use a valid email.';
    }
    if (!form.message.trim()) nextErrors.message = 'Message is required.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError('');

    if (!validate()) {
      setSubmitted(false);
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitted(false);
      setSubmitError('Email service is not configured yet. Add your EmailJS keys in a .env.local file.');
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: site.email,
        },
        { publicKey },
      );

      setSubmitted(true);
      setForm(initialForm);
      setErrors({});
    } catch (error) {
      console.error('EmailJS send failed:', error);
      setSubmitted(false);
      setSubmitError('Message could not be sent. Please try again later or email me directly.');
    }
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className="relative min-h-screen px-5 pb-12 pt-28 sm:px-8 lg:px-10">
      <div className="mx-auto grid w-full max-w-[1200px] gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 26 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="space-y-8"
        >
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-muted">Contact</p>
          <h2 className="text-[clamp(2.4rem,8vw,6rem)] uppercase leading-[0.9] tracking-[-0.07em] text-ink">
            LET&apos;S BUILD <span className="text-accent">SECURELY/</span>
          </h2>
          <a
            href={`mailto:${site.email}`}
            className="group inline-block text-xl font-medium text-ink transition-colors duration-200 hover:text-accent sm:text-2xl"
          >
            {site.email}
            <span className="mt-2 block h-px w-full max-w-[260px] origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
          </a>

          <div className="flex flex-wrap gap-6 pt-3">
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-[0.7rem] uppercase tracking-[0.2em] text-muted transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                {social.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={reduceMotion ? false : { opacity: 0, y: 26 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.1 }}
          className="w-full max-w-[520px] justify-self-end"
          noValidate
        >
          <div className="space-y-7">
            <label className="block">
              <span className="mb-2 block text-[0.7rem] uppercase tracking-[0.18em] text-muted">Name</span>
              <input
                value={form.name}
                onChange={(event) => handleChange('name', event.target.value)}
                className="w-full border-0 border-b border-black/15 bg-transparent px-0 py-3 text-base text-ink outline-none placeholder:text-muted focus:border-accent"
                placeholder="Your name"
                aria-invalid={Boolean(errors.name)}
              />
              <AnimatePresence>
                {errors.name && (
                  <motion.span
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="mt-2 block text-sm text-accent"
                  >
                    {errors.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </label>

            <label className="block">
              <span className="mb-2 block text-[0.7rem] uppercase tracking-[0.18em] text-muted">Email</span>
              <input
                type="email"
                value={form.email}
                onChange={(event) => handleChange('email', event.target.value)}
                className="w-full border-0 border-b border-black/15 bg-transparent px-0 py-3 text-base text-ink outline-none placeholder:text-muted focus:border-accent"
                placeholder="name@example.com"
                aria-invalid={Boolean(errors.email)}
              />
              <AnimatePresence>
                {errors.email && (
                  <motion.span
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="mt-2 block text-sm text-accent"
                  >
                    {errors.email}
                  </motion.span>
                )}
              </AnimatePresence>
            </label>

            <label className="block">
              <span className="mb-2 block text-[0.7rem] uppercase tracking-[0.18em] text-muted">Message</span>
              <textarea
                value={form.message}
                onChange={(event) => handleChange('message', event.target.value)}
                rows={5}
                className="w-full resize-none border-0 border-b border-black/15 bg-transparent px-0 py-3 text-base text-ink outline-none placeholder:text-muted focus:border-accent"
                placeholder="Tell me about your project"
                aria-invalid={Boolean(errors.message)}
              />
              <AnimatePresence>
                {errors.message && (
                  <motion.span
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="mt-2 block text-sm text-accent"
                  >
                    {errors.message}
                  </motion.span>
                )}
              </AnimatePresence>
            </label>

            <div className="flex items-center justify-between gap-4 pt-4">
              <motion.button
                type="submit"
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-none border border-black/15 bg-ink px-5 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-paper transition-colors duration-200 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Send <span aria-hidden="true">→</span>
              </motion.button>
              <AnimatePresence>
                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="text-sm text-accent"
                  >
                    Message sent.
                  </motion.p>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {submitError && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="text-sm text-red-500"
                  >
                    {submitError}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.form>
      </div>

      <footer className="mx-auto mt-16 flex max-w-[1200px] flex-col gap-3 border-t border-black/10 pt-6 text-[0.68rem] uppercase tracking-[0.18em] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {site.year} {site.name}.</p>
        <a href="#home" className="inline-flex items-center gap-2 text-ink hover:text-accent">
          BACK TO TOP <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </section>
  );
}
