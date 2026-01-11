
import { packageContent } from "@/types/types"
import ContentCardComp from "./packageCard"


export default function PackageContent({insights,malysis}:packageContent){
    return(
        <div className="bg-slate-50 p-2 sm:p-4 md:p-4 lg:p-6">
            <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
                <div className="flex gap-4 items-center">
                    <img src="/githubicon.png" className="h-6 w-6 border border-slate-200" />
                    <p className="font-medium text-xl">{insights.packageVersion.package.name}@{insights.packageVersion.version}</p>
                </div>
                <div className="flex flex-col text-xs sm:text-sm gap-2">
                    <div className="flex sm:gap-2">
                        <p className="text-gray-500 min-w-[110px]">Analysed at</p>
                        <p>{new Date(malysis.report.analyzedAt).toLocaleString()}</p>
                    </div>

                    <div className="flex sm:gap-2">
                        <p className="text-gray-500 min-w-[110px]">Source</p>
                        <p className="break-all">{malysis.report.target.origin}</p>
                    </div>

                    <div className="flex sm:gap-2">
                        <p className="text-gray-500 min-w-[110px]">SHA256</p>
                        <p className="break-all">{malysis.report.target.sha256}</p>
                    </div>

                    <div className="flex sm:gap-2">
                        <p className="text-gray-500 min-w-[110px]">Confidence</p>
                        <p className="break-all">{malysis.report.inference.confidence==="CONFIDENCE_HIGH" ? "High": "Low"}</p>
                    </div>
                </div>

                <div className="flex gap-2 sm:gap-4 overflow-x-auto">
                    <ContentCardComp img="/version.png" heading="Version" content={insights.packageVersion.version}/>
                    <ContentCardComp img="/vulnerabilities.png" heading="Vulnerabilities" content={String(insights.insight.vulnerabilities.length)}/>
                    <ContentCardComp img="/openssf.png" heading="OpenSSF Scorecard" content={`${insights.insight.projectInsights[0].scorecard.score.toPrecision(2)}/10`}/>
                    <ContentCardComp img="/license.png" heading="License" content={insights.insight.licenses.licenses[0].licenseId}/>
                    <ContentCardComp img="/ecosystem.png" heading="Ecosystem" content={insights.packageVersion.package.ecosystem.replace("ECOSYSTEM_", "")}/>
                </div>
            </div>
        </div>
    )
}