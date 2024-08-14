import React, { createContext, useState } from "react";

export const ResumeContext = createContext();

export const ResumeProvider = ({children}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [socialLinks, setSocialLinks] = useState([""]);
    const [education, setEducation] = useState("");
    const [gpa, setGpa] = useState("");
    const [experiences, setExperience] = useState([{}]);
    const [projects, setProjects] = useState([{}]);

    return (
        <ResumeContext.Provider
        value={{
            name, setName,
            email, setEmail,
            phoneNumber, setPhoneNumber,
            socialLinks, setSocialLinks,
            education, setEducation,
            gpa, setGpa,
            experiences, setExperience,
            projects, setProjects
        }}
        >
            {children}
        </ResumeContext.Provider>
    );
}