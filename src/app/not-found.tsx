import Button from "@/components/ui/Button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen">
      {/* White canvas */}
      <div className="relative h-full min-h-[calc(100vh-8rem)]">
        {/* Corner texts */}
        <span className="absolute left-6 top-6 text-xs font-medium text-muted-foreground">
          Submit-Line
        </span>

        <span className="absolute right-6 top-6 text-lg font-semibold text-muted-foreground">
          404
        </span>

        <span className="absolute right-6 bottom-6 font-semibold text-lg text-muted-foreground">
          404
        </span>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Button href="/" className="text-lg cursor-pointer">
            <div className="flex flex-row items-center gap-2">
              <ArrowLeft size={"21"} />
              Back to Home
            </div>
          </Button>
        </div>

        {/* Bottom-left main message */}
        <div className="absolute bottom-8 left-8 max-w-md">
          <h1 className="text-6xl font-bold text-red-600 leading-none">
            404
          </h1>
          <p className="mt-2 text-sm text-red-500 leading-snug">
            indicates that the browser was able to communicate with the server,
            but the server could not find the requested resource.
          </p>
        </div>
      </div>
    </div>
  );
}
