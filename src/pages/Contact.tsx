import { useState } from "react";
import {
  EnvelopeIcon,
  MapPinIcon,
  LinkIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Toast from "../components/Toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showToast, setShowToast] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setShowToast(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-24 bg-purple-50 dark:bg-gray-900 transition-colors"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Let&apos;s Connect
          </h2>
          <div className="mt-2 h-1 w-20 bg-purple-600 rounded" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* LEFT: Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Send Me a Message
            </h3>

            <form className="space-y-5 flex-1" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`mt-1 w-full rounded-md border px-4 py-2 bg-transparent focus:ring-2 focus:ring-purple-500 outline-none
                    ${
                      errors.name
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 w-full rounded-md border px-4 py-2 bg-transparent focus:ring-2 focus:ring-purple-500 outline-none
                    ${
                      errors.email
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`mt-1 w-full rounded-md border px-4 py-2 bg-transparent focus:ring-2 focus:ring-purple-500 outline-none
                    ${
                      errors.message
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="mt-4 w-full rounded-md bg-purple-600 py-3 font-semibold text-white hover:bg-purple-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT: Connect With Me */}
         {/* RIGHT: Connect With Me */}
<div className="flex flex-col">
  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
    Connect With Me
  </h3>

  <div className="grid grid-cols-1 gap-5 flex-1">

    {/* Email */}
    <a
      href="mailto:navyakavya16@gmail.com"
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex gap-4
                 hover:shadow-xl transition"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg
                      bg-purple-100 dark:bg-purple-900/40">
        <EnvelopeIcon className="h-6 w-6 text-purple-600" />
      </div>
      <div>
        <p className="font-semibold text-gray-900 dark:text-gray-100">
          Email
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          navyakavya16@gmail.com
        </p>
      </div>
    </a>

    {/* Phone / WhatsApp */}
    <a
      href="tel:+919XXXXXXXXX"
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex gap-4
                 hover:shadow-xl transition"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg
                      bg-purple-100 dark:bg-purple-900/40">
        <PhoneIcon className="h-6 w-6 text-purple-600" />
      </div>
      <div>
        <p className="font-semibold text-gray-900 dark:text-gray-100">
          Phone / WhatsApp
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          +91 9XXXXXXXXX
        </p>
      </div>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/navya-m-k-ab2306204/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex gap-4
                 hover:shadow-xl transition"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg
                      bg-purple-100 dark:bg-purple-900/40">
        <LinkIcon className="h-6 w-6 text-purple-600" />
      </div>
      <div>
        <p className="font-semibold text-gray-900 dark:text-gray-100">
          LinkedIn
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          linkedin.com/in/navya-m-k
        </p>
      </div>
    </a>

    {/* Location */}
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg
                      bg-purple-100 dark:bg-purple-900/40">
        <MapPinIcon className="h-6 w-6 text-purple-600" />
      </div>
      <div>
        <p className="font-semibold text-gray-900 dark:text-gray-100">
          Location
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          Bangalore, India 🇮🇳
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Open to remote / hybrid opportunities
        </p>
      </div>
    </div>

  </div>
</div>

        </div>
      </div>

      {/* Toast */}
      {showToast && (
        <div className="fixed top-16 right-6 z-50 space-y-6">
          <Toast
            type="success"
            message="Message Submitted Successfully!"
            onClose={() => setShowToast(false)}
          />
        </div>
      )}
    </section>
  );
}
