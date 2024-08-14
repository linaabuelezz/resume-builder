"use client"

import React, { useContext } from "react";
import { ResumeContext } from "@/hooks/ResumeContext";
import { DialogueContext } from "@/hooks/DialogueContext";


const InformationInputBox = () => {
    const {openModal} = useContext(DialogueContext);

    const {
        name, setName,
        email, setEmail,
        phoneNumber, setPhoneNumber,
        socialLinks, setSocialLinks,
        education, setEducation,
        gpa, setGpa,
        experiences, setExperience,
        projects, setProjects
    } = useContext(ResumeContext);


    const handleSocialLinksChange = (index, value) => {
        const newLinks = [...socialLinks];
        newLinks[index] = value;
        setSocialLinks(newLinks);
    };

    const handleExperienceChange = (index, value) => {
        const newExperience = [...experiences];
        newExperience[index] = value;
        setExperience(newExperience);
    };

    const handleProjectsChange = (index, value) => {
        const newProjects = [...projects];
        newProjects[index] = value;
        setProjects(newProjects);
    }

    return (
        <div className="form">
            <label>
                Name:
                <input className="bg-blue-50 rounded-md p-1" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Email:
                <input className="bg-blue-50 rounded-md p-1" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                Phone number:
                <input className="bg-blue-50 rounded-md p-1" type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </label>
            <label>
                <button className="text-white font-semibold p-2 bg-blue-700 rounded-md hover:scale-105" onClick={() => {openModal("sociallinks");}}>Add social link</button>
            </label>
            <label>
                Education:
                <input className="bg-blue-50 rounded-md p-1" type="text" value={education} onChange={(e) => setEducation(e.target.value)} />
            </label>
            <label>
                GPA:
                <input className="bg-blue-50 rounded-md p-1" type="text" value={gpa} onChange={(e) => setGpa(e.target.value)} />
            </label>
            <label>
                <button className="text-white bg-blue-700 rounded-md font-semibold hover:scale-105 p-2" onClick={() => {openModal("experience");}}>Add experience</button>
            </label>
            <label>
                <button className="text-white bg-blue-700 rounded-md font-semibold p-2 hover:scale-105" onClick={() => {openModal("projects");}}>Add project</button>
            </label>
        </div>
    )

}

export default InformationInputBox;