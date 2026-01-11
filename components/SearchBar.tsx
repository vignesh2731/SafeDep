"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export function SearchBar(){
    const [search,setSearch] = useState<string>("");
    const router = useRouter();
    return(
        <div>
            <div className="max-w-md mx-auto mt-4 border-2 border-slate-300 ">   
                <label className="block mb-2.5 text-sm font-medium text-heading sr-only ">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
                    </div>
                    <input className="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder=" /npm/express/v1" required onChange={(e)=>setSearch(e.target.value)}/>
                    <button onClick={()=>{
                        router.push(`/p${search}`)
                    }} className="absolute end-1.5 bottom-1.5 text-black bg-white p-1 rounded-sm hover:bg-slate-700 hover:text-white ">
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}
