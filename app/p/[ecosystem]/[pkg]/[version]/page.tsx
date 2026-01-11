import { getPackageData } from "@/actions/actions";
import { Button } from "@/components/Button";
import { FooterComponent } from "@/components/FooterComponent";
import PackageContent from "@/components/packageContent";
export default async function Page({params}: {params: Promise<{ecosystem:string,pkg:string,version:string}>}){
    const { ecosystem , pkg ,version } = await params;
    const data = await getPackageData(pkg,version);
    return (
        <div className="max-w-8xl bg-gray-100 min-h-screen text-bl">
        <div className="px-2 py-10 lg:px-46 md:px-20 sm:px-4  min-h-screen flex flex-col gap-4">   
            <div className="flex justify-between items-baseline">
                <img src="/header.png" className="lg:h-20 lg:w-50 md:h-18 md:w-44 sm:h-16 sm:w-40 h-14 w-32"/>
                <Button label="Install GitHub App" className="bg-emerald-600 text-white lg:h-10 lg:py-2 lg:px-4 md:h-8 md:py-2 md:px-3 md:text-sm sm:h-8 sm:py-1 sm:px-2 sm:text-xs h-8 py-1 px-2 text-xs" image="/github.png" imageClassName="h-6 w-8 rounded-xl" href={data.insights.insight.projectInsights[0].project.url} />
            </div>
            <div>
                <PackageContent insights={data.insights} malysis={data.malysis} />
                <FooterComponent insights={data.insights} malysis={data.malysis} />
            </div>
        </div>
        </div>
    )
}

export const revalidate = 3600;