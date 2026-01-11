"use client";

import { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-white via-emerald-50/60 to-white text-white px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-7xl font-extrabold text-red-400 tracking-tight">
          Error
        </h1>
        <p className="mt-6 text-2xl font-semibold text-black">
          Something went wrong
        </p>
        <p className="mt-3 text-slate-600 text-lg ">
          We failed to fetch details for the requested package or library.
          This could be due to a network issue, invalid package name, or a
          temporary server problem.
        </p>
        {error.digest && (
          <p className="mt-4 text-xs text-slate-500">
            Error ID: {error.digest}
          </p>
        )}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="rounded-lg bg-red-500 px-6 py-3 text-sm font-semibold text-black hover:bg-red-400 transition"
          >
            Try again
          </button>

          <a
            href="/"
            className="rounded-lg border border-slate-600 px-6 py-3 text-sm font-semibold text-black hover:bg-black hover:text-white transition"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}
