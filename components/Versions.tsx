import { packageContent } from "@/types/types";
import { Label } from "./Label";

export function Versions({insights}:packageContent){
    const versions = insights.insight.availableVersions.slice(Math.min(insights.insight.availableVersions.length,15)*-1).reverse();
    return (
        <div className="bg-white pb-40 text-black">
          <div className="grid grid-cols-[1fr_100px_90px] lg:grid-cols-[1fr_140px_140px] text-slate-400 text-sm lg:px-2 px-1 py-3 border-b border-slate-200">
            <p className="pl-2">Version</p>
            <p className="pl-2">Published</p>
            <p className="pl-2"></p>
          </div>
          {versions.map((v) => (
            <div key={v.version} className="grid grid-cols-[1fr_100px_90px] lg:grid-cols-[1fr_140px_140px] text-sm lg:px-2 px-1 py-3border-b border-slate-200">
              <div className="flex gap-2">
                <Label name={v.version} className="bg-slate-200 font-[450]"/>
                {v.defaultVersion && <Label name="Latest" className="bg-green-200 text-green-500 font-[450]"/>}
              </div>
              <div>
                {new Date(v.publishedAt).toLocaleDateString()}
              </div>
              <div className="text-green-500 cursor-pointer">
                {"View Version"}
              </div>
            </div>
          ))}
        </div>
   );
}