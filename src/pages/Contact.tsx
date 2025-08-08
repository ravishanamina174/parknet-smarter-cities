import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="container py-8">
      <Helmet>
        <title>Contact Us | ParkNet</title>
        <meta name="description" content="Contact ParkNet support team for help and feedback." />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <h1 className="text-2xl font-bold">Contact Us</h1>

      <form className="mt-6 max-w-xl space-y-4">
        <Input placeholder="Your name" />
        <Input placeholder="Email address" type="email" />
        <Textarea placeholder="Message" className="min-h-[140px]" />
        <Button type="submit">Send Message</Button>
      </form>
    </div>
  );
}
