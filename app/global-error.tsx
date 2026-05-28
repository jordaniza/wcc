"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen items-center justify-center bg-white px-6 text-center text-foreground">
          <div className="max-w-md space-y-4">
            <h1 className="text-3xl font-bold text-primary">
              Something went wrong
            </h1>
            <p>
              Please refresh the page or try again in a moment.
            </p>
            <button
              className="rounded-md bg-primary px-4 py-2 font-medium text-foreground"
              onClick={() => reset()}
              type="button"
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
