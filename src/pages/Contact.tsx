import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Building2 } from "lucide-react";

export default function Contact() {
  return (
    <div className="container py-8">
      <Helmet>
        <title>Contact Us | ParkNet</title>
        <meta name="description" content="Contact ParkNet support team for help and feedback." />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <h1 className="text-2xl font-bold">Contact Us</h1>

      <section className="mt-4 rounded-xl border bg-card p-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <div className="text-sm text-muted-foreground">Main Hub</div>
            <div className="text-lg font-semibold">Colombo Central Parking Hub</div>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground"><Building2 className="h-4 w-4" /> No. 25, Smart Street, Colombo 01</div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground"><Phone className="h-4 w-4" /> +94 77 123 4567</div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground"><Clock className="h-4 w-4" /> Open Hours: 6:00 AM - 11:00 PM</div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4" /> Colombo 01</div>
          </div>
        </div>
      </section>


      <form className="mt-6 max-w-xl space-y-4">
        <Input placeholder="Your name" />
        <Input placeholder="Email address" type="email" />
        <Textarea placeholder="Message" className="min-h-[140px]" />
        <Button type="submit">Send Message</Button>
      </form>
    </div>
  );
}
