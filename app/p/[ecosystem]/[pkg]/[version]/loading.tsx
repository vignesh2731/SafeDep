export default function Loading() {
    return (
      <div className="animate-pulse flex flex-col gap-10 px-2 py-10 lg:px-46 md:px-20 sm:px-4  min-h-screen">
        <div className="flex items-center justify-between px-8 py-6">
          <div className="h-6 w-40 rounded bg-slate-200" />
          <div className="h-10 w-40 rounded-md bg-slate-200" />
        </div>
        <div className="px-8 py-4 space-y-3">
          <div className="h-6 w-64 rounded bg-slate-200" />
          <div className="space-y-2">
            <div className="h-4 w-80 rounded bg-slate-200" />
            <div className="h-4 w-96 rounded bg-slate-200" />
            <div className="h-4 w-[500px] rounded bg-slate-200" />
            <div className="h-4 w-72 rounded bg-slate-200" />
          </div>
        </div>
        <div className="px-8 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-24 rounded-xl border border-slate-200 bg-slate-100"
            />
          ))}
        </div>
        <div className="px-8 py-4 flex gap-4">
          {["Overview", "Vulnerabilities", "Versions", "License"].map(
            (d,i) => (
              <div
                key={i}
                className="h-8 w-28 rounded bg-slate-200"
              />
            )
          )}
        </div>
        <div className="px-8 py-6 space-y-4">
          <div className="h-6 w-40 rounded bg-slate-200" />
          <div className="h-4 w-full rounded bg-slate-200" />
          <div className="h-4 w-11/12 rounded bg-slate-200" />
          <div className="h-4 w-10/12 rounded bg-slate-200" 
          />
        </div>
      </div>
    );
  }
  