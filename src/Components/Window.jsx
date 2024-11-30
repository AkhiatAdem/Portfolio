import React, { useState, useRef , useContext} from "react";
import { MyContext } from "../WindowsData";
import Projects from "./Projects";
import About from "./About";
import Exp from "./Exp";
import Skills from "./Skills";
export default function Window(props) {
    const {windows,setWindow} = useContext(MyContext)
    const {onTop,setOnTop} = useContext(MyContext);


    const [position, setPosition] = useState({ x: 0, y: 0 });
    

    const windowRef = useRef(null);


    const [dragging, setDragging] = useState(false);
    const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        setDragging(true);
        setOnTop(props.title);
        setStartPosition({ x: e.clientX - position.x, y: e.clientY - position.y });
    };


    const handleMouseMove = (e) => {
        if (!dragging) return;
        const newX = e.clientX - startPosition.x;
        const newY = e.clientY - startPosition.y;
        setPosition({ x: newX, y: newY });
    };


    const handleMouseUp = () => {
        setDragging(false);
    };

    React.useEffect(() => {
        const windowElement = windowRef.current;

        windowElement.addEventListener("mousemove", handleMouseMove);
        windowElement.addEventListener("mouseup", handleMouseUp);
        windowElement.addEventListener("mouseleave", handleMouseUp);

        return () => {
            windowElement.removeEventListener("mousemove", handleMouseMove);
            windowElement.removeEventListener("mouseup", handleMouseUp);
            windowElement.removeEventListener("mouseleave", handleMouseUp);
        };
    }, [dragging, startPosition]);

    return (
        <div
            ref={windowRef}
            className="absolute rounded-md bg-[#252525] shadow-lg overflow-y-auto border w-[90vw] md:w-[60vw]"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                
                height: "450px",
                zIndex: `${onTop == props.title ? '50' : '1'}`,

            }}
            onMouseDown={handleMouseDown}
        >
            <div className="h-[35px] bg-gray-800 flex items-center justify-between px-2 cursor-move border sticky top-0">
                <div className="text-white">{props.title}</div>
                <div className="bg-[url('/close.png')] w-[25px] h-[25px] bg-contain cursor-pointer hover:opacity-70"
                 onClick={()=>{
                    let temp = [...windows];
                    temp.splice(temp.indexOf(props.title), 1);
                    setWindow(temp);
                }}></div>
            </div>
            {
                
                
                props.title == 'projects' ? <Projects/> : props.title == 'About' ? <About/> : props.title == 'experience' ? <Exp/> : props.title == 'skills' ? <Skills/>:"" 
            }

            
        </div>
    );
}
