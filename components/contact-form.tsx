"use client"

import type React from "react"
import { useState } from "react"
import { Send } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    // Show success message
    alert("Message sent successfully!")
  }

  return (
    <div className="relative rounded-lg shadow-lg overflow-hidden bg-primary/5 border border-primary/20">
      <div className="absolute top-0 right-0 h-full w-12 bg-primary/10 flex items-center justify-center">
        <p className="text-primary font-semibold text-lg tracking-widest transform rotate-90 whitespace-nowrap">
          Contact Me
        </p>
      </div>

      <div className="p-8 pr-16">
        <h3 className="text-xl font-medium text-slate-900 mb-6">Send Me a Message</h3>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex flex-col items-start w-full">
            <label htmlFor="name" className="text-sm font-medium text-slate-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full py-2 pl-0 bg-transparent border-0 border-b-2 border-primary/50 focus:border-primary outline-none focus:ring-0 placeholder:text-slate-400 text-slate-800 placeholder:text-sm transition-colors"
              placeholder="Enter your name"
              aria-required="true"
            />
          </div>

          <div className="flex flex-col items-start w-full">
            <label htmlFor="email" className="text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full py-2 pl-0 bg-transparent border-0 border-b-2 border-primary/50 focus:border-primary outline-none focus:ring-0 placeholder:text-slate-400 text-slate-800 placeholder:text-sm transition-colors"
              placeholder="Enter your email"
              aria-required="true"
            />
          </div>

          <div className="flex flex-col items-start w-full">
            <label htmlFor="subject" className="text-sm font-medium text-slate-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full py-2 pl-0 bg-transparent border-0 border-b-2 border-primary/50 focus:border-primary outline-none focus:ring-0 placeholder:text-slate-400 text-slate-800 placeholder:text-sm transition-colors"
              placeholder="Enter subject"
              aria-required="true"
            />
          </div>

          <div className="flex flex-col items-start w-full">
            <label htmlFor="message" className="text-sm font-medium text-slate-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full py-2 pl-0 bg-transparent border-0 border-b-2 border-primary/50 focus:border-primary outline-none focus:ring-0 placeholder:text-slate-400 text-slate-800 placeholder:text-sm transition-colors resize-none"
              placeholder="Your message"
              aria-required="true"
            ></textarea>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
              aria-label="Send message"
            >
              <span>Send Message</span>
              <Send size={16} aria-hidden="true" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

