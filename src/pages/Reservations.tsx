import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Reservations() {
  const [seconds, setSeconds] = useState(90 * 60);
  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, []);

  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  return (
    <div className="container py-8">
      <Helmet>
        <title>My Reservations | ParkNet</title>
        <meta name="description" content="Manage your active parking reservations and timers." />
        <link rel="canonical" href="/reservations" />
      </Helmet>

      <h1 className="text-2xl font-bold">My Reservations</h1>

      <Card className="mt-6">
        <CardHeader>
          <div className="text-sm text-muted-foreground">Active Reservation</div>
          <div className="text-3xl font-bold mt-1 tabular-nums">
            {h.toString().padStart(2, "0")}:{m.toString().padStart(2, "0")}:{s.toString().padStart(2, "0")}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border p-3">
              <div className="text-xs text-muted-foreground">Slot</div>
              <div className="font-semibold">A-12</div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-xs text-muted-foreground">Arrival</div>
              <div className="font-semibold">10:30 AM</div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-xs text-muted-foreground">Exit</div>
              <div className="font-semibold">12:00 PM</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="secondary">Find My Vehicle</Button>
            <Button>Extend Time</Button>
            <Button variant="destructive">End Time</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
