

export default function ProjectCard(props){


    return <div className=" flex md:flex-row flex-col-reverse justify-between items-center p-4 border-2 rounded-md ">
    <div>
    <h1 className="font-semibold uppercase text-[1.1rem]">{props.name}</h1>
    <hr className="border my-2"></hr>
    <h3 className="text-[1rem]">{props.description}</h3>
    {
        props.url[0].length > 0 ? <button className="bg-gray-800 w-[200px] p-2 text-[1rem] font-semibold my-2 border hover:opacity-75 cursor-pointer"><a href={props.url[1]} target="blank">{props.url[0]}</a></button>: ""
    

    }
    </div>
    <img src={props.src} className="md:w-[30%] w-[90%] my-5 md:my-0" />
</div>
}