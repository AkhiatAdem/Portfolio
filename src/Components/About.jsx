

export default function About(){


    return (
        <div className=" flex justify-center bg-gray-900 text-white px-4 py-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    Hi, I'm Akhiat Adem!
                </h1>
                <p className="text-md sm:text-lg text-gray-300">
                    I'm a second-year Computer Science student at USTO University and currently interning at Oran Web Brains. 
                    With a passion for software development and hands-on experience in web and e-commerce projects, 
                    I'm building a strong foundation in programming, problem-solving, and user-focused design.
                </p>
                <p className="text-md sm:text-lg text-gray-300">
                    I'm also actively interested in community-oriented roles where I can apply my skills to make a positive impact. 
                    Outside of academics and coding, I enjoy playing guitar and tackling new challenges that help me grow both personally and professionally.
                </p>
                <div className="space-x-4 mt-6 flex justify-center">
                    <a href="https://github.com/AkhiatAdem" target="blank" className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md transition duration-300">Get in Touch</a>
                </div>
            </div>
        </div>
    );
}