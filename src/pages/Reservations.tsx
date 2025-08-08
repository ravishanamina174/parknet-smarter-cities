import { Helmet } from "react-helmet-async";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useLocation } from "react-router-dom";

interface ReservationState {
  centerId: string;
  centerName: string;
  slotNumber: number;
  status: "free" | "reserved" | "occupied";
  timerSeconds?: number;
}

export default function Reservations() {
  const location = useLocation();
  const state = (location.state || null) as ReservationState | null;

  const initialSeconds = state?.timerSeconds ?? 90 * 60;
  const [seconds, setSeconds] = useState(initialSeconds);
  const initialSecondsRef = useRef(initialSeconds);
  const [start] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, []);

  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  const end = useMemo(() => new Date(start.getTime() + initialSecondsRef.current * 1000), [start]);
  const fmt = (d: Date) => d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

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
              <div className="font-semibold">{state ? `#${state.slotNumber}` : "A-12"}</div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-xs text-muted-foreground">Location</div>
              <div className="font-semibold">{state ? state.centerName : "Central Plaza Parking"}</div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-xs text-muted-foreground">Status</div>
              <div className="font-semibold capitalize">{state ? state.status : "reserved"}</div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border p-3">
              <div className="text-xs text-muted-foreground">Arrival</div>
              <div className="font-semibold">{fmt(start)}</div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-xs text-muted-foreground">Exit</div>
              <div className="font-semibold">{fmt(end)}</div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-xs text-muted-foreground">Duration</div>
              <div className="font-semibold">{Math.ceil(initialSecondsRef.current / 60)} mins</div>
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
