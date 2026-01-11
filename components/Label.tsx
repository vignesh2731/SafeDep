type ComponentProps = {
    name : string;
    className?: string;
}
export function Label({name,className}:ComponentProps){
    return(
        <span className={`px-2 py-0.5 ${className} rounded-sm text-xs`}>
            {name}
        </span>
    )
}