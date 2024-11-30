

export default function Header() {
    const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const date = new Date();
    return <div className="flex flex-row-reverse justify-between items-center px-5 float-right w-[100vw] h-[30px] bg-[#252525] text-white gap-2">
        <div className="flex flex-row-reverse gap-2">
            <h2>{date.getHours().toString().length == 1 ? `0${date.getHours()}`:date.getHours()}:{date.getMinutes().toString().length == 1 ? `0${date.getMinutes()}`:date.getMinutes()}</h2>
        <h2>{days[date.getDay()-1]} {date.getDate()} {months[date.getMonth()]}</h2>
        </div>
        <h2 className="font-semibold">AdemOS</h2>
    </div>
    
}