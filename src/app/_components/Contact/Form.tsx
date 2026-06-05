"use client";

import Button from "@/app/components/Button";
import { useActionState, useEffect } from "react";
import { sendContactEmail } from "./_actions/contact";
import { ActionState } from "@/types/actionState";
import toast from "react-hot-toast";

const Form = () => {
  const initialState: ActionState = {
    errors: {},
    message: "",
    status: null,
    formData: null,
  };

  const [state, action, pending] = useActionState(
    sendContactEmail,
    initialState,
  );

  useEffect(() => {
    if (state && state.status && state.message && !pending) {
      if (state.status === 200) {
        toast.success(state.message);
      } else {
        toast.error(state.message);
      }
    }
  }, [pending, state]);

  return (
    <form
      action={action}
      className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300 space-y-6"
    >
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
          defaultValue={state.formData?.get("name") as string}
        />
        {state.errors?.name && (
          <p className="text-sm italic font-medium text-red-500 mt-2">
            {state.errors?.name}
          </p>
        )}
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
          defaultValue={state.formData?.get("email") as string}
        />
        {state.errors?.email && (
          <p className="text-sm italic font-medium text-red-500 mt-2">
            {state.errors?.email}
          </p>
        )}
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
          defaultValue={state.formData?.get("message") as string}
        />
        {state.errors?.message && (
          <p className="text-sm italic font-medium text-red-500 mt-2">
            {state.errors?.message}
          </p>
        )}
      </div>

      <Button className="w-full" type="submit" size="lg" disabled={pending}>
        {pending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default Form;
