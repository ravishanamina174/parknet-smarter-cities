import { Helmet } from "react-helmet-async";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Locate } from "lucide-react";
import ParkingCard, { ParkingCenter } from "@/components/cards/ParkingCard";

const sample: ParkingCenter[] = [
  {
    id: "1",
    name: "Central Plaza Parking",
    address: "12 Main St, Downtown",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1600&auto=format&fit=crop",
    counts: { free: 18, reserved: 6, occupied: 24 },
  },
  {
    id: "2",
    name: "Greenway Garage",
    address: "88 Riverside Ave",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1477967318803-5f0fddf3f55f?q=80&w=1600&auto=format&fit=crop",
    counts: { free: 10, reserved: 12, occupied: 30 },
  },
  {
    id: "3",
    name: "Market Street Lot",
    address: "240 Market St",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1534234752346-cf16a3fa23e3?q=80&w=1600&auto=format&fit=crop",
    counts: { free: 22, reserved: 4, occupied: 17 },
  },
];

export default function Dashboard() {
  const [query, setQuery] = useState("");
  const list = useMemo(() => {
    if (!query) return sample;
    const q = query.toLowerCase();
    return sample.filter(
      (p) => p.name.toLowerCase().includes(q) || p.address.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="container py-8">
      <Helmet>
        <title>Dashboard | ParkNet</title>
        <meta name="description" content="Find nearby parking centers with live availability and ratings." />
        <link rel="canonical" href="/dashboard" />
      </Helmet>

      <h1 className="text-2xl font-bold">Hello, Driver! Let’s find a parking spot for you</h1>

      <div className="mt-6 flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search parking centers or areas"
            className="pl-9"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <Button variant="secondary" className="gap-2">
          <Locate className="h-4 w-4" /> Near me
        </Button>
      </div>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Spots Near You</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => (
            <ParkingCard key={c.id} center={c} />
          ))}
        </div>
      </section>
    </div>
  );
}
