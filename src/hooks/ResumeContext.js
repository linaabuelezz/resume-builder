import React, { createContext, useState, useEffect } from "react";

export const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [name, setName] = useState("Jane Doe");
  const [email, setEmail] = useState("janeDoe@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("0123456789");
  const [socialLinks, setSocialLinks] = useState([""]);
  const [education, setEducation] = useState("University of Chicago");
  const [gpa, setGpa] = useState("3.5");
  const [skills, setSkills] = useState({
    Languages: [],
    Frameworks: [],
    Libraries: [],
  });
  const [experiences, setExperience] = useState([{}]);
  const [projects, setProjects] = useState([{}]);
  const [isFirstOpen, setIsFirstOpen] = useState(true);

  useEffect(() => {
    if (isFirstOpen) {
      setProjects([{ projectName: "Default Project", projectPoints: ["Initial point 1", "Initial point 2"] }]);
      setExperience([{companyName: "Company name", jobPosition: "Intern", experiencePoints: ["Initial point 1", "Initial point 2"]}]);
      setSkills({Languages: ["HTML", "CSS", "JavaScript"],
        Frameworks: [],
        Libraries: []
      })
      setIsFirstOpen(false);
    }
  }, [isFirstOpen]);

  return (
    <ResumeContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        phoneNumber,
        setPhoneNumber,
        socialLinks,
        setSocialLinks,
        education,
        setEducation,
        gpa,
        setGpa,
        skills,
        setSkills,
        experiences,
        setExperience,
        projects,
        setProjects,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};
