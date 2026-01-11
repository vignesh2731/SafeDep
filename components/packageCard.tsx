export default function ContentCardComp({heading,content,img}:{heading:string,content:string,img:string}){
    return(
        <div className="bg-white border border-slate-100 min-w-20 shadow-sm rounded-md p-2 md:p-2 lg:p-4 flex flex-col gap-4 lg:gap-6 w-20 sm:w-30 md:w-42 lg:w-60 hover:shadow-md text-sm">
            <div className="flex gap-2 font-light items-center text-slate-400 text-xs md:text-sm lg:text-md truncate">
                <img src={img} className="h-4 w-4 lg:h-6 lg:w-6 border-b border-slate-200" />
                {heading}
            </div>
            <div className="text-md lg:text-xl font-bold flex truncate">
                {content}
            </div>
        </div>
    )
}