
import ProjectCard from "./ProjectCard"
export default function Projects(){
    const projects = [
        {
            name:"Landing Page for a BeautyShop",
            descreption: "Modern Landing page using Html Css Js",
            src: 'project1.PNG',
            url:['Live Demo',"https://glambr.vercel.app/"]
        },
        {
            name:"Wordle game",
            descreption: "Functional Wordle Game",
            src: 'project2.PNG',
            url:['',""]
        }
        ,
        {
            name:"Sorting visulizer",
            descreption: "bubble and selection  dynamic sorting visulizer made with react",
            src: 'project3.jpg',
            url:['GitHub Repo',"https://github.com/AkhiatAdem/sorting-visualizer"]
        },
        {
            name:"simple public chatapp",
            descreption: "simple chatapp made with socket dont the UI lol",
            src: 'project4.PNG',
            url:['Live Demo',"https://chatapp2-e33x.onrender.com/"]
            
        }
    ]

    return <div className="flex flex-col gap-3 text-white p-7">
        {projects.map((p)=>{
             return <ProjectCard name={p.name} description={p.descreption} src={p.src} url={p.url}/>
        })}
        

        


    </div>
}