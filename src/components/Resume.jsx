import React from 'react';
import Work2 from './Work2';

const Resume = () => {
    const skills = {
        aws: [
            { name: "EC2", tooltip: "• EC2<br/>• S3<br/>• Lambda<br/>• CloudFormation" },
            { name: "Route53", tooltip: "• EC2<br/>• S3<br/>• Lambda<br/>• CloudFormation" },
            { name: "ACM", tooltip: ''},
            { name: "LAMBDA Serverless", tooltip: "• EC2<br/>• S3<br/>• Lambda<br/>• CloudFormation" },
            { name: "Media Convert Video Processing", tooltip: "• EC2<br/>• S3<br/>• Lambda<br/>• CloudFormation" },
            { name: "Event Bridge", tooltip: "• EC2<br/>• S3<br/>• Lambda<br/>• CloudFormation" },
            { name: "Api Gateway", tooltip: "• EC2<br/>• S3<br/>• Lambda<br/>• CloudFormation" },
            { name: "Load Balancer", tooltip: "• EC2<br/>• S3<br/>• Lambda<br/>• CloudFormation" },
            { name: "Auto Scaling", tooltip: "• EC2<br/>• S3<br/>• Lambda<br/>• CloudFormation" },
            { name: "S3", tooltip: "• EC2<br/>• S3<br/>• Lambda<br/>• CloudFormation" },
            { name: "CloudWatch", tooltip: "• EC2<br/>• S3<br/>• Lambda<br/>• CloudFormation" },
            { name: "CloudFront", tooltip: "• EC2<br/>• S3<br/>• Lambda<br/>• CloudFormation" },
        ],
        scal: [
            {name: "Docker", tooltip: ""},
            {name: "Redis", tooltip: ""},
            {name: "Kafka", tooltip: ""},
            {name: "Queue", tooltip: ""},
            {name: "Git", tooltip: ""},
            {name: "Pub/Sub", tooltip: ""},
        ],
        backend: [
            {
                name: "NodeJS",
                tooltip: "• var keyword<br/>• let keyword<br/>• const keyword<br/>• if/else<br/>• for/while/do loops<br/>• functions<br/>• async/await<br/>• try/catch/finally"
            },
            { name: "Express", tooltip: "• Middleware<br/>• Routing<br/>• REST APIs<br/>• Error handling<br/>• Templating" },
            { name: "MongoDb", tooltip: "• Database design<br/>• Query optimization<br/>• Transactions<br/>• Stored procedures" },
            { name: "TypeScript", tooltip: "• NoSQL<br/>• Scalability<br/>• Partition keys<br/>• Global tables" },
            { name: "NextJS", tooltip: "• Document model<br/>• Aggregation<br/>• Indexing<br/>• Replication" },
            { name: "AWS Cloud", tooltip: "" },
        ],
        frontend: [
            { name: "JavaScript", tooltip: "• Semantic HTML<br/>• CSS Grid/Flex<br/>• Responsive design<br/>• Animations" },
            { name: "React", tooltip: "• ES6+<br/>• DOM manipulation<br/>• Type system<br/>• Decorators" },
            { name: "NextJS", tooltip: "• Hooks<br/>• SSR<br/>• State management<br/>• Custom hooks" },
            { name: "Ant Design", tooltip: "• Hooks<br/>• SSR<br/>• State management<br/>• Custom hooks" },
            { name: "Tailwind", tooltip: "• Grid system<br/>• Components<br/>• Utilities<br/>• Theming" },
            { name: "HTML", tooltip: "• Utility-first<br/>• Responsive<br/>• Dark mode<br/>• Plugins" },
            { name: "CSS", tooltip: "• Component library<br/>• Theming<br/>• Styled components<br/>• Accessibility" },
            { name: "Bootstrap", tooltip: ""}
        ]
    };

    return (
        <div>
            <div>
                <div>
                    <h2 className="text-3xl font-bold text-pink-600">Resume</h2>
                </div>
                <p className="text-gray-600 mt-2">
                    As a full-stack developer with 5 years of experience, I have extensive knowledge of both front-end and back-end technologies. My expertise includes developing responsive web applications, integrating third-party APIs.
                </p>

                {/* Technical Skills Section */}
                <h4 className="text-xl font-semibold mt-6 text-violet-500">Technical Skills</h4>
                <hr className="border-violet-600 my-2" />

                {/* Backend Section */}
                <h5 className="text-xl font-semibold mt-6 text-violet-500">Back-End</h5>
                <div className='grid grid-cols-2 gap-4 '>
                    {skills.backend.map((skill, i) => (
                        <span
                            key={i}
                            data-tip={skill.tooltip}
                            data-for='skill-tooltip'
                            className='px-3'
                        >
                            <i className='ri-check-double-line mr-2 text-violet-600 font-semibold text-xl'></i>
                            <span className='text-gray-500'>{skill.name}</span>
                        </span>
                    ))}

                </div>

                {/* Scalability & Robust */}
                <h5 className="text-xl font-semibold mt-6 text-violet-500">Scalability & Robust</h5>
                <div className='grid grid-cols-2 gap-4'>
                    {skills.scal.map((skill, i) => (
                        <span
                            key={i}
                            data-tip={skill.tooltip}
                            data-for='skill-tooltip'
                            className='px-3'
                        >
                            <i className='ri-check-double-line mr-2 text-violet-600 font-semibold text-xl'></i>
                            <span className='text-gray-500'>{skill.name}</span>
                        </span>
                    ))}
                </div>
                
                {/* Aws Cloud Services Section */}
                <h5 className="text-xl font-semibold mt-6 text-violet-500">Aws Cloud Services</h5>
                <div className='grid grid-cols-2 gap-4 '>
                    {skills.aws.map((skill, i) => (
                        <span
                            key={i}
                            data-tip={skill.tooltip}
                            data-for='skill-tooltip'
                            className='px-3 py-0 '
                        >
                            <i className='ri-check-double-line mr-2 text-violet-600 font-semibold text-xl'></i>
                            <span className='text-gray-500'>{skill.name}</span>
                        </span>
                    ))}
                </div>

                {/* Fronted Section */}
                <h5 className="text-xl font-semibold mt-6 text-violet-500">Front-End</h5>
                <div className='grid grid-cols-2 gap-4 '>
                    {skills.frontend.map((skill, i) => (
                        <span
                            key={i}
                            data-tip={skill.tooltip}
                            data-for='skill-tooltip'
                            className='px-3 '
                        >
                            <i className='ri-check-double-line mr-2 text-violet-600 font-semibold text-xl'></i>
                            <span className='text-gray-500'>{skill.name}</span>
                        </span>
                    ))}

                </div>

                    {/* work */}
                    <Work2/>
                    {/*  */}
                {/* Technical Skills Section */}
                <h4 className="text-xl font-semibold mt-6 text-violet-500">Objective</h4>
                <hr className="border-violet-600 my-2" />
                <p className='text-gray-500'>
                    As a Prject Manager, I am experienced in both front-end and back-end development. I am proficient in programming languages such as HTML, CSS, JavaScript, and PHP. I am skilled in developing web applications using popular front-end frameworks such as React, Angular. Additionally, I have expertise in building RESTful APIs and working with databases such as MySQL, MongoDB.
                </p>
                

                {/* Education Section */}
                <h4 className="text-xl font-semibold mt-6 text-violet-500">Education</h4>
                <hr className="border-violet-600 my-2" />
                <div className= "flex flex-col gap-2">
                    <div className="flex justify-between">
                        <span className='text-gray-600'>Bachelor of Information Technology</span>
                        <span className="text-gray-500">2020-24 | 80%</span>
                    </div>

                    <div className="flex justify-between">
                        <span className='text-gray-600'>12th, Naihati Anand Swaroop High School</span>
                        <span className="text-gray-500">2021-22 | 65%</span>
                    </div>

                    <div className="flex justify-between">
                        <span className='text-gray-600'>10th, P.G. Senior Secondary School</span>
                        <span className="text-gray-500">2017-18 | 60%</span>
                    </div>
                </div>

                {/* Soft Skills Section */}
                <h4 className="text-xl font-semibold mt-6 text-violet-500">Sof Skills</h4>
                <hr className="border-violet-600 my-2" />
                <ul className="list-disc list-inside text-gray-600">
                    <li>Team Management</li>
                    <li>Acquiring New Skills</li>
                    <li>Regular Updated with Stack Overflow Survey</li>
                    <li>Daily Learning (https://www.w3schools.com, https://www.tutorialspoint.com )</li>
                </ul>

                {/* Trainee Section */}
                <h4 className="text-xl font-semibold mt-6 text-violet-500">Trainee</h4>
                <hr className="border-violet-600 my-2" />

                <div className="flex justify-between items-center">
                    <p className="font-medium text-gray-700 m-0">WAP INSTITUTE</p>
                    <p className="m-0">
                        <a href="https://wapinstitute.com" target="#" rel="">
                            wapinstitute.com
                        </a>
                    </p>
                </div>

                <p className="text-gray-500 mt-2">
                    An Institute of Software Engineering, providing ADSE (Advance Diploma in Software Engineering),
                    Web Design and Development, Programming Language, Game Development, 3D Animation & VFX, AI,
                    Machine Learning, Robotics Engineering, Ethical Hacking and Cyber Security, Data Science and
                    Business Analytics, AI & Machine Learning.
                </p>

                {/* Interests */}
                <h4 className="text-xl font-semibold mt-6 text-violet-500">Interests</h4>
                <hr className="border-violet-600 my-2" />
                <ul className="list-disc list-inside text-gray-600">
                    <li>Building impactful products.</li>
                    <li>Creating user-friendly experiences.</li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;
