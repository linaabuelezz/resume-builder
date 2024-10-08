import React, { useContext } from "react";
import { ResumeContext } from "@/hooks/ResumeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import {
  handleExperienceDelete,
  handleProjectDelete,
  handleSocialLinkDelete,
} from "./functions/FunctionHelpers";
import { useDialogActions } from "@/hooks/UseDialogActions";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Resume = () => {
  const { handleProjectEdit, handleExperienceEdit, handleLinkEdit } =
    useDialogActions();
  const {
    name,
    email,
    phoneNumber,
    socialLinks,
    setSocialLinks,
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
    <div className="resume pt-16">
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
                  <TooltipProvider>
                    <div className="flex items-center space-x-1 relative">
                      <Tooltip delayDuration={100}>
                        <TooltipTrigger className="flex items-center">
                          <img
                            src={link.logo}
                            style={{ maxWidth: "20px", maxHeight: "20px" }}
                            alt="logo"
                            className="mr-1"
                          />
                          <li
                            key={link.id}
                            style={{ listStyle: "none" }}
                            onClick={() => openLink(link)}
                            className="text-sm hover:text-blue-700 text-blue-500 hover:cursor-pointer"
                          >
                            {link.link}
                          </li>
                        </TooltipTrigger>
                        <TooltipContent className="flex justify-center items-center">
                          <button
                            className="bg-gray-200 p-1 rounded hover:scale-105 mr-1"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleLinkEdit(
                                link.id,
                                socialLinks,
                                setSocialLinks
                              );
                            }}
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                          <button
                            className="bg-gray-200 p-1 rounded hover:scale-105"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSocialLinkDelete(
                                link.id,
                                socialLinks,
                                setSocialLinks
                              );
                            }}
                          >
                            <FontAwesomeIcon icon={faTrashCan} />
                          </button>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </TooltipProvider>
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
          {experiences?.map((experience) => (
            <li key={experience.id} className="mb-2 relative group">
              <div className="absolute inset-0 rounded bg-gray-300 opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>

              <div className="relative z-10 p-2">
                <div className="flex justify-between items-center">
                  <h3>
                    <span className="font-semibold text-md">
                      {experience.companyName}
                    </span>
                    {experience.companyName && experience.jobPosition && " | "}
                    <span className="text-md">{experience.jobPosition}</span>
                  </h3>
                  <p className="text-sm">
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
                {/* Edit and Delete buttons below the dates */}
                <div className=" justify-end gap-2 mt-2 hidden group-hover:flex">
                  <button
                    className="z-20 bg-black text-white p-1 rounded transition-transform transform hover:scale-105"
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
                    className="z-20 bg-black text-white p-1 rounded transition-transform transform hover:scale-105"
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
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-xl">Projects</h2>
        <hr className="bg-black h-0.5 mb-1" />
        <ul>
          {projects.map((project) => (
            <li key={project.id} className="mb-2 relative group">
              <div className="rounded absolute inset-0 bg-gray-300 opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>

              <div className="relative z-10 p-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-md">
                    {project.projectName}
                  </h3>
                  <p className="text-sm">
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
                {/* Edit and Delete buttons below the dates */}
                <div className="justify-end gap-2 mt-2 hidden group-hover:flex">
                  <button
                    className="z-20 bg-black text-white p-1 rounded transition-transform transform hover:scale-105"
                    onClick={() => {
                      handleProjectEdit(project.id, projects, setProjects);
                    }}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    className="z-20 bg-black text-white p-1 rounded transition-transform transform hover:scale-105"
                    onClick={() =>
                      handleProjectDelete(project.id, projects, setProjects)
                    }
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;
