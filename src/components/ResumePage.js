import React, { useContext } from "react";
import { ResumeContext } from "@/hooks/ResumeContext";

const Resume = () => {
    const { name, email, phoneNumber, socialLinks, education, gpa, experiences, projects } = useContext(ResumeContext);

  const openLink = (link) => {
    window.open(link, "_blank", "noopener,noreferrer"); 
  };
    return ( 
        <div className="resume">
            <h1 className="text-center font-bold text-3xl">{name}</h1>
            <p className="text-center text-sm">{email}</p>
            <p className="text-center text-sm">{phoneNumber}</p>
            <div>
                <ul>
                    {socialLinks.map((link, index) => (
                        <li key={index} onClick={() => openLink(link)} className="text-center text-sm hover:text-blue-700 text-blue-500 hover:cursor-pointer">{link}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2 className="font-semibold text-xl mt-3">Education: <span className="text-sm font-normal">{education}</span></h2>              
                <p className="text-md font-semibold">GPA: <span className="font-normal">{gpa}</span></p>
            </div>
            <div>
                <h2 className="font-semibold text-xl">Skills</h2>
                <hr className="bg-black h-0.5" />
                <ul></ul>
            </div>
            <div>
                <h2 className="font-semibold text-xl">Experience</h2>
                <hr className="bg-black h-0.5" />
                <ul>
                    {experiences.map((experience, index) => (
                        <li key={index}>{experience.experienceName}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2 className="font-semibold text-xl">Projects</h2>
                <hr className="bg-black h-0.5" />
                <ul>
                    {projects.map((project, index) => (
                        <li key={index}>{project.projectName}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Resume;