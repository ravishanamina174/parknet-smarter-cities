import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MapPin, CarFront, Menu } from "lucide-react";
import { useState } from "react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/reservations", label: "My Reservations" },
  { to: "/contact", label: "Contact" },
  { to: "/settings", label: "Settings" },
];

export function TopNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-secondary text-primary-foreground grid place-items-center shadow-[var(--shadow-elevate)]">
            <CarFront className="h-5 w-5" />
          </div>
          <span className="font-display text-lg font-semibold tracking-wide">ParkNet</span>
        </Link>

        <button
          className="md:hidden p-2 rounded-lg border hover:bg-accent"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className={cn("hidden md:flex items-center gap-6")}
          aria-label="Primary">
          {navItems.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                cn(
                  "text-sm transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground"
                )
              }
            >
              {n.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button asChild variant="outline">
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t">
          <div className="container py-3 flex flex-col gap-2">
            {navItems.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "py-2",
                    isActive ? "text-primary" : "text-foreground"
                  )
                }
              >
                {n.label}
              </NavLink>
            ))}
            <div className="flex gap-2 pt-2">
              <Button asChild variant="outline" className="flex-1">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild className="flex-1">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default TopNav;
