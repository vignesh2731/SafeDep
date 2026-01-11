"use client"

import { useState } from "react"
import { Details } from "./DetailsBar"
import { DetailsTabData, packageContent } from "@/types/types";
import { Overview } from "./Overview";
import { Vulnerabilities } from "./Vulnerabilities";
import { Versions } from "./Versions";
import { License } from "./License";

export function FooterComponent({insights,malysis}:packageContent){
    const [tab,setTab] = useState<DetailsTabData>(DetailsTabData.Overview);
    return (
        <div className="flex flex-col">
            <Details selected={DetailsTabData[tab]} onClick={(key:string)=>{
                setTab(DetailsTabData[key as keyof typeof DetailsTabData])
            }}/>
            {tab===DetailsTabData.Overview && <Overview insights={insights} malysis={malysis}/>}
            {tab===DetailsTabData.Vulnerabilities && <Vulnerabilities insights={insights} malysis={malysis} />}
            {tab===DetailsTabData.Versions && <Versions insights={insights} malysis={malysis}/>}
            {tab===DetailsTabData.License && <License insights={insights} malysis={malysis}/>}
        </div>
    )
}