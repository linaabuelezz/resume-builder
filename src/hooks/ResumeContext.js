import React, { createContext, useState, useEffect } from "react";

export const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [name, setName] = useState("Jane Doe");
  const [email, setEmail] = useState("janeDoe@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("0123456789");
  const [socialLinks, setSocialLinks] = useState([{}]);
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
  const [projectToEdit, setProjectToEdit] = useState(null);
  const [experienceToEdit, setExperienceToEdit] = useState(null);
  const [socialLinkToEdit, setSocialLinkToEdit] = useState(null);

  useEffect(() => {
    if (isFirstOpen) {
      setProjects([{id: "1", projectName: "Default Project", startDate: "Jan 2024", endDate: "Feb 2024", projectPoints: ["Initial point 1", "Initial point 2"] }]);
      setExperience([{id: "1", companyName: "Company name", jobPosition: "Intern", startDate: "Mar 2023", endDate: "Dec 2023", experiencePoints: ["Initial point 1", "Initial point 2"]}]);
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
        socialLinkToEdit,
        setSocialLinkToEdit,
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
        projectToEdit,
        setProjectToEdit,
        experienceToEdit,
        setExperienceToEdit
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};
