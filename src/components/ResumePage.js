import React, { useContext } from "react";
import { ResumeContext } from "@/hooks/ResumeContext";

const Resume = () => {
  const {
    name,
    email,
    phoneNumber,
    socialLinks,
    education,
    gpa,
    skills,
    experiences,
    projects,
  } = useContext(ResumeContext);

  const openLink = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const isSectionEmpty = (section) => {
    return skills[section].length === 0;
  };

  return (
    <div className="resume">
      <h1 className="text-center font-bold text-3xl">{name}</h1>
      <p className="text-center text-sm">{email}</p>
      <p className="text-center text-sm">{phoneNumber}</p>
      <div>
        <ul>
          {socialLinks.map((link, index) => (
            <li
              key={index}
              onClick={() => openLink(link)}
              className="text-center text-sm hover:text-blue-700 text-blue-500 hover:cursor-pointer"
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="font-semibold text-xl mt-3">
          Education: <span className="text-sm font-normal">{education}</span>
        </h2>
        <p className="text-md font-semibold">
          GPA: <span className="font-normal">{gpa}</span>
        </p>
      </div>
      <div>
        <h2 className="font-semibold text-xl">Skills</h2>
        <hr className="bg-black h-0.5" />
        {Object.keys(skills).map((section) => (
        !isSectionEmpty(section) && (
          <div key={section} className="mb-4">
            <h3 className="font-semibold">
              {section}: <span className="font-normal text-sm">{skills[section].join(", ")} </span>
            </h3>
          </div>
        )
      ))}
      </div>
      <div>
  <h2 className="font-semibold text-xl">Experience</h2>
  <hr className="bg-black h-0.5" />
  <ul>
    {experiences?.map((experience, index) => (
      <li key={index} className="mb-2">
        <h3 key={index}>
          <span className="font-bold text-md">{experience.companyName}</span>
          {experience.companyName && experience.jobPosition && ' | '}
          <span className="text-md">{experience.jobPosition}</span>
        </h3>
        <ul className="ml-4 list-disc">
          {experience.experiencePoints?.map((point, pointIndex) => (
            <li key={pointIndex} className="text-sm">
              {point}
            </li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
</div>

      <div>
        <h2 className="font-semibold text-xl">Projects</h2>
        <hr className="bg-black h-0.5" />
        <ul>
          {projects.map((project, index) => (
            <li key={index} className="mb-2">
              <h3 className="font-bold text-md">{project.projectName}</h3>
              <ul className="ml-4 list-disc">
                {project.projectPoints?.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-sm">
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;
