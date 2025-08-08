import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

export default function Settings() {
  return (
    <div className="container py-8">
      <Helmet>
        <title>Settings | ParkNet</title>
        <meta name="description" content="Manage your ParkNet profile and account settings." />
        <link rel="canonical" href="/settings" />
      </Helmet>

      <h1 className="text-2xl font-bold">Settings</h1>

      <div className="mt-6 flex items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarFallback>PN</AvatarFallback>
        </Avatar>
        <div>
          <div className="text-lg font-semibold">Your Name</div>
          <div className="text-sm text-muted-foreground">user@email.com</div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button variant="secondary">Edit Profile</Button>
        <Button>Change Password</Button>
        <Button variant="outline">Logout</Button>
      </div>

      <div className="mt-10 rounded-lg border p-4">
        <div className="font-semibold">Admin</div>
        <p className="text-sm text-muted-foreground mt-1">
          Admin link will appear after authentication and role assignment.
        </p>
        <Button asChild className="mt-3" variant="outline">
          <Link to="/admin">Go to Admin</Link>
        </Button>
      </div>
    </div>
  );
}
