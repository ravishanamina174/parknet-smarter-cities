import { Helmet } from "react-helmet-async";

export default function Admin() {
  return (
    <div className="container py-8">
      <Helmet>
        <title>Admin | ParkNet</title>
        <meta name="description" content="Admin tools to design and manage parking slot layouts." />
        <link rel="canonical" href="/admin" />
      </Helmet>

      <h1 className="text-2xl font-bold">Admin</h1>
      <p className="mt-2 text-muted-foreground">
        This area will be protected via Clerk and roles. A drag-and-drop editor for slot layouts will appear here.
      </p>

      <div className="mt-6 rounded-xl border border-dashed p-6 min-h-[240px] grid place-items-center">
        <span className="text-muted-foreground">Drag & drop canvas placeholder</span>
      </div>
    </div>
  );
}
