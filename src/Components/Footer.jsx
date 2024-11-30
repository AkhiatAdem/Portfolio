import { useContext , useState } from "react";
import { MyContext } from "../WindowsData";

    

export default function Footer() {
    const {windows,setWindow} = useContext(MyContext);
    const handleClose = (index) =>{
        if(windows.length == 1){
            setWindow([]);
        }else{
            
            setWindow(windows.filter((_, i) => i !== index));
            

        }

    }
   
    
    return <div className="w-[100vw] h-[50px] bg-[#252525] absolute bottom-0  items-center flex border-t-2">
        {windows.map((w,index)=>{
            return <div className="border-r-2 px-6 text-white flex justify-between w-[150px]" >
                <h1 >{w}</h1>
                 <h1 className="hover:opacity-70 cursor-pointer"
                 onClick={()=>handleClose(index)}>X</h1>
                 </div>
        })}

    </div>
}