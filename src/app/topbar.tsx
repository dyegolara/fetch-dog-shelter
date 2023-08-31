import { LogOut } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";

export function Topbar() {
  const router = useRouter();

  const handleLogout = async () => {
    const response = await fetch(
      "https://frontend-take-home-service.fetch.com/auth/logout",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        credentials: "include",
      }
    );
    if (response.status === 200) {
      router.push("/");
    }
  };

  return (
    <div className="flex justify-between items-center p-4">
      <Link href="/">
        <div className="flex items-center text-3xl font-bold tracking-widest">
          FDS
        </div>
      </Link>
      <div className="flex gap-4">
        <Button variant="outline" size="icon" onClick={handleLogout}>
          <LogOut className="h-[1.2rem] w-[1.2rem]" />
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
}
