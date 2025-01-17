import { Feed } from "@/modules/app/ui/feed";
import { auth } from "@/modules/auth/lib/auth";
import { redirect } from "next/navigation";

export default async function HubPage() {
  const session = await auth();

  if (!session || !session.user) {
    redirect("/auth/login");
  }

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <main className="lg:col-span-7 space-y-6">
          <h1 className="text-3xl font-bold mb-6">Feed</h1>
          <Feed />
        </main>
        <aside className="lg:col-span-5 space-y-6 mt-14"></aside>
      </div>
    </div>
  );
}
