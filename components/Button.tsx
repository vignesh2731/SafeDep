"use client"
type ButtonProps = {
    label:string,
    onClick?: ()=>void
    className?: string
    image?: string
    imageClassName?:string
    href?: string;
}
export function Button({label,onClick,className,image,imageClassName,href}:ButtonProps){
    return(
        <div className={`${className} rounded-sm cursor-pointer flex gap-2 text-sm items-center`} onClick={()=>{
            if(href)window.open(href,"_blank");
        }}>
            {image && <img src={image} className={`${imageClassName}`}/>}
            {label}
        </div>
    )
}