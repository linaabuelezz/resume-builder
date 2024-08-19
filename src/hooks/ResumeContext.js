import React, { createContext, useState } from "react";

export const ResumeContext = createContext();

export const ResumeProvider = ({children}) => {
    const [name, setName] = useState("Jane Doe");
    const [email, setEmail] = useState("janeDoe@gmail.com");
    const [phoneNumber, setPhoneNumber] = useState("0123456789");
    const [socialLinks, setSocialLinks] = useState([""]);
    const [education, setEducation] = useState("University of Chicago");
    const [gpa, setGpa] = useState("3.5");
    const [skills, setSkills] = useState([])
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
            skills, setSkills,
            experiences, setExperience,
            projects, setProjects
        }}
        >
            {children}
        </ResumeContext.Provider>
    );
}