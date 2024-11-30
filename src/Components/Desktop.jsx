import { useState , useEffect } from "react";
import Folder from "./Folder";
import Header from "./Header";
import Footer from "./Footer";
import Window from "./Window";
import { useContext } from "react";
import { MyContext } from "../WindowsData";
export default function Desktop() {
    const [selected,setselected] = useState('');
   
    const {windows,setWindow} = useContext(MyContext)
    const {onTop,setOnTop} = useContext(MyContext);

    const handleClickOutside = (e) => {
        
        if (!e.target.closest('.folder')) {
          setselected('');
        }
      };
    const handleDoubleClick = (folder) => {
        if(windows.length > 4){
            alert("processor cant open this many windows lol");
        }else{
            let temp = [...windows];
            temp.push(folder);
            setWindow(temp);
        }
    }
    
    
    return <>
    <div onClick={(e)=>handleClickOutside(e)}>

    <Header/>
    <div className="flex flex-col p-5 gap-3">

    
    <Folder title="Projects" src="folder.png" selected={selected == 'projects'} onClick={()=>{
        setselected("projects");
        }}
        onDoubleClick={()=>{
            handleDoubleClick('projects');
            setOnTop('projects');
        }}/>
    <Folder title="About me" src="folder.png" selected={selected == 'About'} onClick={()=>setselected("About")}
    onDoubleClick={()=>{
        
        handleDoubleClick('About');
        setOnTop('About');

    }}
    />
    
    <Folder title="Experience" src="folder.png" selected={selected == 'experience'} onClick={()=>setselected("experience")}
    onDoubleClick={()=>{
       
        handleDoubleClick('experience');
        setOnTop('experience');

    }}
    />
    <Folder title="Skills" src="folder.png" selected={selected == 'skills'} onClick={()=>setselected("skills")}
    onDoubleClick={()=>{
        
        handleDoubleClick('skills');
        setOnTop('skills');
        

    }}
    />
    <a href="https://github.com/AkhiatAdem" target="blank"><Folder title="gitHub" src="github.png" selected={selected == 'gitHub'}
    
    /></a>
    </div>
        {
            windows.map((w)=>{
                return <Window title={w}/>
            })
        }


    </div>
<Footer/>
    </>
    
}