import { useState } from "react";
import { User, Mail, MessageSquare } from 'lucide-react';
import ContactFormSendButton from '../../ui/ContactFormSendButton';
import { motion } from 'framer-motion';

const FORM_ENDPOINT = "https://formspree.io/f/xrezeyza";

const ContactFormFields = () => {
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const isSending = status.state === "loading";

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", message: "" });

    // basic validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ state: "error", message: "Please fill in all fields." });
      return;
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus({ state: "success", message: "Message sent! I’ll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus({ state: "error", message: "Something went wrong. Please try again." });
    }
  };
  
  return(
    <form className="space-y-6" onSubmit={onSubmit}>
      {/* Input fields */}

      {/* Name */}
      <motion.div
        initial={{
          y: 30,
          opacity: 0,
        }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          type: "tween",
          duration: 0.7,
          ease: "easeOut",
        }}
        className="relative">
          <User className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={onChange}
            autoComplete="name"
            className="w-full bg-white/5 border border-white/20 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition duration-300"/>
      </motion.div>

      {/* Email */}
      <motion.div
        initial={{
          y: 30,
          opacity: 0,
        }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          type: "tween",
          duration: 0.7,
          ease: "easeOut",
        }}
        className="relative">
        <Mail className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
        <input
          name="email"
          type="email" 
          placeholder="Your Email"
          value={form.email}
          onChange={onChange}
          autoComplete="email"
          className="w-full bg-white/5 border border-white/20 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition duration-300"
        />
      </motion.div>

      {/* Message */}
      <motion.div
        initial={{
          y: 30,
          opacity: 0,
        }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          type: "tween",
          duration: 0.7,
          ease: "easeOut",
        }}
        className="relative">
        <MessageSquare className="absolute top-4 left-3 w-5 h-5 text-gray-500" />
        <textarea 
          name="message"
          placeholder="Your Message" 
          rows="5"
          value={form.message}
          onChange={onChange}
          className="w-full bg-white/5 border border-white/20 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition duration-300 resize-none"
        />
      </motion.div>

      {/* Status message */}
      {status.state !== "idle" && (
        <p
          className={`text-sm ${
            status.state === "success" ? "text-green-400" : status.state === "error" ? "text-red-400" : "text-white/70"
          }`}
        >
          {status.message || (status.state === "loading" ? "Sending..." : "")}
        </p>
      )}

      <motion.div
        initial={{
          y: 30,
          opacity: 0,
        }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          type: "tween",
          duration: 0.7,
          ease: "easeOut",
        }}
      >
        <ContactFormSendButton disabled={status.state === "loading"} isSending={isSending}/>
      </motion.div>
    </form>
  )
}

export default ContactFormFields;