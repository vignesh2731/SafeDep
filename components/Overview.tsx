import { packageContent } from "@/types/types";

    export function Overview({malysis}:packageContent){
    return(
        <div className="py-6 px-10 md:py-10 md:px-32 lg:py-18 lg:px-38 flex flex-col gap-8 w-full bg-white text-slate-500 text-sm rounded-sm">
            <div className="flex gap-3">
                <div className="min-w-[3px] self-stretch bg-teal-600 rounded-sm"></div>
                <div className="flex flex-col gap-2 p-4">
                    <h2 className="font-[520] text-lg text-black">{"Summary"}</h2>
                        <p>{malysis.report.inference.summary}</p>
                        <p>{malysis.report.inference.details}</p>
                </div>
            </div>
            <div className="flex gap-3">
                <div className="w-[3px] self-stretch bg-teal-600 rounded-sm"></div>
                <div className="flex flex-col gap-2 p-4">
                <h2 className="font-[520] text-lg text-black">{"Verification Record"}</h2>
                    <p>{malysis.report.inference.confidence}</p>
                </div>
            </div>
            <div className="flex gap-3 items-stretch">
                <div className="min-w-[3px] self-stretch bg-teal-600 rounded-sm"></div>
                <div className="flex flex-col gap-2 p-4">
                <h2 className="font-[520] text-lg text-black">{"Details"}</h2>
                    <p>
                        <b className="text-slate-500">{"Note:"}</b>{" This report is updated by a verification record"}
                    </p>
                    <p>{malysis.report.inference.details}</p>
                </div>
            </div>
        </div>
    )
}