import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function BackButton() {
    const router = useRouter();
    return (
      <Button variant="outline" className="w-fit" onClick={() => router.back()}>
        Back
      </Button>
    );
  }