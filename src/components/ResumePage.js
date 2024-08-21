import React, { useContext } from "react";
import { ResumeContext } from "@/hooks/ResumeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import {
  handleExperienceDelete,
  handleProjectDelete,
} from "./functions/FunctionHelpers";
import { useDialogActions } from "@/hooks/UseDialogActions";
const Resume = () => {
  const { handleProjectEdit, handleExperienceEdit } = useDialogActions();
  const {
    name,
    email,
    phoneNumber,
    socialLinks,
    education,
    gpa,
    skills,
    experiences,
    setExperience,
    projects,
    setProjects,
  } = useContext(ResumeContext);

  const openLink = (link) => {
    window.open(link.link, "_blank", "noopener,noreferrer");
  };

  const isSectionEmpty = (section) => {
    return skills[section].length === 0;
  };

  return (
    <div className="resume">
      <h1 className="text-center font-bold text-3xl">{name}</h1>
      <p className="text-center text-sm mb-0.5">
        {email} | {phoneNumber}
      </p>
      <div className="flex items-center space-x-2 justify-center">
        {socialLinks.length > 0 &&
          socialLinks.map(
            (link, index) =>
              link.logo &&
              link.link && (
                <React.Fragment key={index}>
                  <div className="flex items-center space-x-1">
                    <img
                      src={link.logo}
                      style={{ maxWidth: "20px", maxHeight: "20px" }}
                      alt="logo"
                    />
                    <li
                      style={{ listStyle: "none" }}
                      onClick={() => openLink(link)}
                      className="text-sm hover:text-blue-700 text-blue-500 hover:cursor-pointer"
                    >
                      {link.link}
                    </li>
                  </div>
                  {index < socialLinks.length - 1 && (
                    <span className="mx-2 text-gray-500">|</span>
                  )}
                </React.Fragment>
              )
          )}
      </div>

      <div className="mb-1">
        <h2 className="font-semibold text-xl mt-2">
          Education: <span className="text-sm font-normal">{education}</span>
        </h2>
        <p className="text-md font-semibold">
          GPA: <span className="font-normal">{gpa}</span>
        </p>
      </div>
      <div>
        <h2 className="font-bold text-xl">Skills</h2>
        <hr className="bg-black h-0.5" />
        {Object.keys(skills).map(
          (section) =>
            !isSectionEmpty(section) && (
              <div key={section} className="mb-1">
                <h3 className="font-semibold">
                  {section}:{" "}
                  <span className="font-normal text-sm">
                    {skills[section].join(", ")}{" "}
                  </span>
                </h3>
              </div>
            )
        )}
      </div>
      <div>
        <h2 className="font-bold text-xl">Experience</h2>
        <hr className="bg-black h-0.5 mb-1" />
        <ul>
          {experiences?.map((experience, _) => (
            <li key={experience.id} className="mb-2 relative group">
              <div className="flex justify-between items-center">
                <h3>
                  <span className="font-semibold text-md">
                    {experience.companyName}
                  </span>
                  {experience.companyName && experience.jobPosition && " | "}
                  <span className="text-md">{experience.jobPosition}</span>
                </h3>
                <p className="text-sm group-hover:hidden">
                  {experience.startDate} - {experience.endDate}
                </p>
              </div>
              <ul className="ml-4 list-disc">
                {experience.experiencePoints?.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-sm">
                    {point}
                  </li>
                ))}
              </ul>
              <button
                className="absolute top-0 right-7 hidden group-hover:block bg-gray-200 p-1 rounded hover:scale-105"
                onClick={() =>
                  handleExperienceEdit(
                    experience.id,
                    experiences,
                    setExperience
                  )
                }
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button
                className="absolute top-0 right-0 hidden group-hover:block bg-gray-200 p-1 rounded hover:scale-105"
                onClick={() =>
                  handleExperienceDelete(
                    experience.id,
                    experiences,
                    setExperience
                  )
                }
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-xl">Projects</h2>
        <hr className="bg-black h-0.5 mb-1" />
        <ul>
          {projects.map((project, _) => (
            <li key={project.id} className="mb-2 relative group">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-md">{project.projectName}</h3>
                <p className="text-sm group-hover:hidden">
                  {project.startDate} - {project.endDate}
                </p>
              </div>
              <ul className="ml-4 list-disc">
                {project.projectPoints?.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-sm">
                    {point}
                  </li>
                ))}
              </ul>
              {/* Edit Button */}
              <button
                className="absolute top-0 right-7 hidden group-hover:block bg-gray-200 p-1 rounded hover:scale-105"
                onClick={() => {
                  handleProjectEdit(project.id, projects, setProjects);
                }}
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button
                className="absolute top-0 right-0 hidden group-hover:block bg-gray-200 p-1 rounded hover:scale-105"
                onClick={() =>
                  handleProjectDelete(project.id, projects, setProjects)
                }
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;
