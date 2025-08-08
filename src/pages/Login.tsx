import { Helmet } from "react-helmet-async";

export default function Login() {
  return (
    <div className="container py-16">
      <Helmet>
        <title>Login | ParkNet</title>
        <meta name="description" content="Login to ParkNet using secure authentication." />
        <link rel="canonical" href="/login" />
      </Helmet>

      <h1 className="text-2xl font-bold">Login</h1>
      <p className="mt-2 text-muted-foreground">
        Clerk authentication will be enabled after you provide your Clerk publishable key.
      </p>
    </div>
  );
}
