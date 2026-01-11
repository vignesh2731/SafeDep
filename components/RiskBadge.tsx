export type Risk ="RISK_LOW"| "RISK_MEDIUM"| "RISK_HIGH"  | "RISK_CRITICAL" | "RISK_UNSPECIFIED";
const riskStyles: Record<Risk, string> = {
  RISK_LOW: "bg-green-100 text-green-700",
  RISK_MEDIUM: "bg-yellow-100 text-yellow-700",
  RISK_HIGH: "bg-orange-100 text-orange-700",
  RISK_CRITICAL: "bg-red-100 text-red-700",
  RISK_UNSPECIFIED: "bg-slate-100 text-slate-600",
};

export function RiskBadge({risk = "RISK_UNSPECIFIED"}: {risk?: Risk}){
  return (
    <span className={`px-2 py-0.5 text-xs rounded font-medium inline-flex items-center ${riskStyles[risk]}`}>
      {risk.replace("RISK_", "")}
    </span>
  );
}
