type ComponentProps = {
    onClick: (value:string)=>void;
    selected:string
}

export function Details({onClick,selected}:ComponentProps){
    const details = ["Overview","Vulnerabilities","Versions","License"];
    return (
        <div className="w-full px-4 py-2 flex text-md gap-4 text-slate-600 shadow-sm">
            {details.map((d,key)=>(
                <div className={`p-2 rounded-sm text-xs md:text-sm cursor-pointer ${(selected!==d) ? "" : "bg-white text-black"} transition-colors duration-200 ease-in-out`} key={key} onClick={()=>{
                    onClick(d);
                }}>
                    {d}
                </div>
            ))}
        </div>
    )
}