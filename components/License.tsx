import { packageContent } from "@/types/types";

export function License({ insights }: packageContent) {
  const licenses = insights.insight.licenses.licenses;

  return (
    <div className="bg-white pb-40 rounded-sm text-black">
      <div className="grid grid-cols-[1fr_100px_100px] sm:grid-cols-[1fr_140px_140px] md:grid-cols-[1fr_180px_180px] lg:grid-cols-[1fr_240px_180px] text-sm text-slate-400 px-2 py-3 border-b border-slate-200 lg:pr-20 pl-4">
        <div>{"License ID"}</div>
        <div>{"License Name"}</div>
        <div>{"Reference URL"}</div>
      </div>
      {licenses.map((l, idx) => {
        const licenseId = l.licenseId;
        const referenceUrl = `https://spdx.org/licenses/${licenseId}.html`;
        return (
          <div
            key={`${licenseId}-${idx}`}
            className="grid grid-cols-[1fr_100px_100px] sm:grid-cols-[1fr_140px_140px] md:grid-cols-[1fr_180px_180px] lg:grid-cols-[1fr_240px_180px] text-sm px-2 py-3 border-b border-slate-200 lg:pr-20 pl-4"
          >
            <div>{licenseId}</div>

            <div className="truncate">
              {licenseId.replace("-", " ")}
            </div>

            <div className="truncate text-green-600 cursor-pointer">
              <a
                href={referenceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {referenceUrl}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
