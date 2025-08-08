import { Helmet } from "react-helmet-async";

export default function Signup() {
  return (
    <div className="container py-16">
      <Helmet>
        <title>Sign Up | ParkNet</title>
        <meta name="description" content="Create your ParkNet account to reserve parking effortlessly." />
        <link rel="canonical" href="/signup" />
      </Helmet>

      <h1 className="text-2xl font-bold">Sign Up</h1>
      <p className="mt-2 text-muted-foreground">
        Clerk authentication will be enabled after you provide your Clerk publishable key.
      </p>
    </div>
  );
}
