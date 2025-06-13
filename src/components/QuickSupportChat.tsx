import React, { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "@/components/ui/use-toast";

const QuickSupportChat = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to an API
    console.log("Support request:", { email, subject, body });
    toast({
      title: "Message sent!",
      description: "Our team will get back to you soon.",
      duration: 5000,
    });
    setEmail("");
    setSubject("");
    setBody("");
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-brand-black mb-4">Quick Support Chat</h2>
          <p className="mb-8 text-brand-gray">
            Need help? Enter your email, subject, and message below. Our team will respond as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-left">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="bg-transparent border-b border-brand-black px-4 py-2 text-brand-black placeholder:text-brand-gray focus:outline-none focus:border-brand-accent"
            />
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              required
              className="bg-transparent border-b border-brand-black px-4 py-2 text-brand-black placeholder:text-brand-gray focus:outline-none focus:border-brand-accent"
            />
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Type your message here..."
              required
              rows={4}
              className="bg-transparent border-b border-brand-black px-4 py-2 text-brand-black placeholder:text-brand-gray focus:outline-none focus:border-brand-accent resize-none"
            />
            <Button 
              type="submit"
              className="bg-brand-black hover:bg-brand-dark text-white rounded-none mt-2"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuickSupportChat;
