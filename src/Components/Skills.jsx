export default function Skills() {
    return (
        <div className="flex justify-center bg-gray-900 text-white px-4 py-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    My Skills
                </h1>
                <p className="text-md sm:text-lg text-gray-300">
                    I have developed a diverse set of skills during my academic journey and through hands-on experience. 
                    These include a strong foundation in programming languages, frameworks, and tools that help me build robust and efficient software solutions.
                </p>
                <div className="space-y-4 mt-6">
                    <div>
                        <h3 className="text-xl font-semibold text-green-500">Languages</h3>
                        <p className="text-md sm:text-lg text-gray-300">
                            JavaScript,`` C++, HTML, CSS
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-green-500">Frameworks & Libraries</h3>
                        <p className="text-md sm:text-lg text-gray-300">
                            React, Node.js, Express,Tailwind CSS
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-green-500">Tools & Platforms</h3>
                        <p className="text-md sm:text-lg text-gray-300">
                            Git, GitHub, VS Code, Postman
                        </p>
                    </div>
                </div>
                <div className="space-x-4 mt-6 flex justify-center">
                    <a
                        href="https://linkedin.com/in/adam-akhiat-0886bb283"
                        target="_blank"
                        className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md transition duration-300"
                    >
                        View My Profile
                    </a>
                </div>
            </div>
        </div>
    );
}
