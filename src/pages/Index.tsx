import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import hero from "@/assets/park-hero.jpg";
import { motion } from "framer-motion";
import { Activity, Leaf, ShieldCheck, Search as SearchIcon, CalendarCheck2, Car } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>ParkNet | Smart Parking - Smarter Cities</title>
        <meta name="description" content="Real-time smart parking solution for sustainable cities. Find, reserve, and manage parking with live status updates." />
        <link rel="canonical" href="/" />
      </Helmet>


      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={hero} alt="Aerial view of a modern city parking lot" loading="eager" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/60 to-background" />
        </div>

        <div className="container flex min-h-[70vh] flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block rounded-full border px-3 py-1 text-xs text-muted-foreground">
              Park smarter. Drive happier.
            </span>
            <h1 className="mt-4 font-display text-4xl md:text-5xl font-extrabold tracking-tight">
              Smart Parking - Smarter Cities
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A real-time parking solution supporting Sustainable Cities.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 justify-center">
              <Button asChild size="lg" className="hover-scale">
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="hover-scale">
                <Link to="/login">Login</Link>
              </Button>

            </div>
          </motion.div>

          <motion.div
            className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 w-full max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="rounded-xl border bg-card p-4 text-left">
              <div className="text-sm text-muted-foreground">Live Status</div>
              <div className="mt-1 text-2xl font-semibold">Real-time updates</div>
            </div>
            <div className="rounded-xl border bg-card p-4 text-left">
              <div className="text-sm text-muted-foreground">Sustainable</div>
              <div className="mt-1 text-2xl font-semibold">Reduced traffic</div>
            </div>
            <div className="rounded-xl border bg-card p-4 text-left">
              <div className="text-sm text-muted-foreground">Secure</div>
              <div className="mt-1 text-2xl font-semibold">Reliable bookings</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <h2 className="text-xl font-semibold text-center">How It Works</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <motion.article
              className="rounded-xl border bg-card p-6 text-center hover-scale"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border">
                <SearchIcon className="h-5 w-5" />
              </div>
              <div className="mt-3 text-sm text-muted-foreground">Step 1</div>
              <div className="text-lg font-semibold">Find</div>
              <p className="mt-1 text-sm text-muted-foreground">Search nearby parking centers with live availability.</p>
            </motion.article>

            <motion.article
              className="rounded-xl border bg-card p-6 text-center hover-scale"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border">
                <CalendarCheck2 className="h-5 w-5" />
              </div>
              <div className="mt-3 text-sm text-muted-foreground">Step 2</div>
              <div className="text-lg font-semibold">Reserve</div>
              <p className="mt-1 text-sm text-muted-foreground">Pick a slot and confirm your reservation in seconds.</p>
            </motion.article>

            <motion.article
              className="rounded-xl border bg-card p-6 text-center hover-scale"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border">
                <Car className="h-5 w-5" />
              </div>
              <div className="mt-3 text-sm text-muted-foreground">Step 3</div>
              <div className="text-lg font-semibold">Park</div>
              <p className="mt-1 text-sm text-muted-foreground">Navigate to your spot and enjoy a seamless experience.</p>
            </motion.article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
