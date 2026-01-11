import { packageContent } from "@/types/types";
import { Risk, RiskBadge } from "./RiskBadge";

export function Vulnerabilities({ insights }: packageContent) {
  const vulnerabilities = insights.insight?.vulnerabilities ?? [];
  return (
    <div className="flex flex-col w-full bg-white md:text-sm rounded-xs pb-40 text-xs text-black">
      <div className="grid grid-cols-[100px_1fr_80px_70px_70px] md:grid-cols-[150px_1fr_100px_100px_100px] lg:grid-cols-[200px_1fr_120px_120px_120px] px-4 py-3 border-b border-slate-200 text-slate-500">
        <div>Vulnerability ID</div>
        <div>Summary</div>
        <div>Risk</div>
        <div>Published</div>
        <div>Modified</div>
      </div>
      {vulnerabilities.map((vuln, idx) => (
        <div
          key={`${vuln.id?.value}-${idx}`}
          className="grid grid-cols-[100px_1fr_80px_70px_70px] md:grid-cols-[150px_1fr_100px_100px_100px] lg:grid-cols-[200px_1fr_120px_120px_120px] px-4 py-3 border-b border-slate-200 items-center">
          <div>
            {vuln.id?.value}
          </div>
          <div className="truncate">
            {vuln.summary}
          </div>
          <div>
            <RiskBadge risk={(vuln.severities?.[0]?.risk ?? "RISK_UNSPECIFIED") as unknown as Risk} />
          </div>
          <div>
            {vuln.publishedAt
              ? new Date(vuln.publishedAt).toLocaleDateString("en-US")
              : "-"}
          </div>
          <div>
            {vuln.modifiedAt
              ? new Date(vuln.modifiedAt).toLocaleDateString("en-US")
              : "-"}
          </div>
        </div>
      ))}
      {vulnerabilities.length === 0 && (
        <div className="px-4 py-10 text-center text-slate-500">
          No known vulnerabilities found
        </div>
      )}
    </div>
  );
}
