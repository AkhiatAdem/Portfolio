

export default function Folder(props) {
    
    

    return <div 
    className={`folder flex flex-col w-[90px] cursor-pointer items-center justify-center ${props.selected ? "bg-[#cdbfa6]" : ""}`} 
    onClick={props.onClick} 
    onDoubleClick={props.onDoubleClick}
    >
        <img className="w-[90%]"src={props.src} />
        <h2 className="font-semibold text-[1rem] text-[#252525]">{props.title}</h2>
    </div>
}