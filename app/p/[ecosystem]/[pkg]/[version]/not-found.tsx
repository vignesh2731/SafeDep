import Link from "next/link";

type NotFoundProps = {
  searchParams?: { pkg?: string };
};

export default function NotFound({ searchParams }: NotFoundProps) {
  const pkg = searchParams?.pkg ?? "this package";

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 bg-linear-to-br from-white via-emerald-50/60 to-white">
      <div className="max-w-xl text-center rounded-xl border border-slate-200 bg-white p-10 shadow-sm">
        <h1 className="text-8xl font-extrabold tracking-tight text-emerald-600">
          404
        </h1>
        <p className="mt-6 text-2xl font-semibold text-slate-900">
          Package not found
        </p>

        <p className="mt-3 text-lg text-slate-600">
          The package / library{" "}
          <span className="font-medium text-slate-900">{pkg}</span>{" "}
          you are searching for does not exist or is not indexed yet.
        </p>

        <div className="mt-8 flex items-center justify-center">
          <Link href="/" className="rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-500">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
