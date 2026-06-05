"use client";

import Button from "@/app/components/Button";

const Form = () => {
  return (
    <form className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300 space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your name..."
          className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          placeholder="your@email.com"
          className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Your message..."
          className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
        />
      </div>

      <Button className="w-full" type="submit" size="lg">
        Send Message
      </Button>
    </form>
  );
};

export default Form;
