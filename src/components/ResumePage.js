import React, { useContext } from "react";
import { ResumeContext } from "@/hooks/ResumeContext";

const Resume = () => {
    const { name, email, phoneNumber, socialLinks, education, gpa, experiences, projects } = useContext(ResumeContext);
    return ( 
        <div className="resume">
            <h1 className="text-center font-bold text-3xl">{name}</h1>
            <p className="text-center text-sm">{email}</p>
            <p className="text-center text-sm">{phoneNumber}</p>
            <div>
                <h2 className="font-semibold text-lg">Education:</h2>
                <p className="text-sm">{education}</p>
                <p className="text-sm">GPA: {gpa}</p>
            </div>
            <div>
                <ul>
                    {socialLinks.map((link, index) => (
                        <li key={index}>{link}</li>
                    ))}
                </ul>
            </div>
            {/* <div>
                <h2>Experience</h2>
                <ul>
                    {experiences.map((experience, index) => (
                        <li key={index}>{experience}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Projects</h2>
                <ul>
                    {projects.map((project, index) => (
                        <li key={index}>{project}</li>
                    ))}
                </ul>
            </div> */}
        </div>
    )
}

export default Resume;