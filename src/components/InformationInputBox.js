"use client";

import React, { useContext } from "react";
import { ResumeContext } from "@/hooks/ResumeContext";
import { DialogueContext } from "@/hooks/DialogueContext";

const InformationInputBox = () => {
  const { openModal } = useContext(DialogueContext);

  const {
    name,
    setName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    education,
    setEducation,
    gpa,
    setGpa,
  } = useContext(ResumeContext);

  return (
    <div className="form pt-16">
      <label className="font-semibold">
        Name:
        <input
          defaultValue="Jane Doe"
          className="bg-blue-50 rounded-md p-1 font-normal"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="font-semibold">
        Email:
        <input
          defaultValue="janeDoe@gmail.com"
          className="bg-blue-50 rounded-md p-1 font-normal"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="font-semibold">
        Phone number:
        <input
          className="bg-blue-50 rounded-md p-1 font-normal"
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </label>
      <label className="font-semibold">
        Education:
        <input
          className="bg-blue-50 rounded-md p-1 font-normal"
          type="text"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
        />
      </label>
      <label className="font-semibold">
        GPA:
        <input
          className="bg-blue-50 rounded-md p-1 font-normal"
          type="text"
          value={gpa}
          onChange={(e) => setGpa(e.target.value)}
        />
      </label>
      <div className="flex gap-4 mt-4 mb-12 justify-center">
        <button
          className="text-white font-semibold p-2 bg-black rounded-md hover:scale-105"
          onClick={() => {
            openModal("sociallinks");
          }}
        >
          Add social link
        </button>
        <button
          className="text-white font-semibold p-2 bg-black rounded-md hover:scale-105"
          onClick={() => {
            openModal("skillset");
          }}
        >
          Add skill
        </button>
        <button
          className="text-white bg-black rounded-md font-semibold hover:scale-105 p-2"
          onClick={() => {
            openModal("experience");
          }}
        >
          Add experience
        </button>
        <button
          className="text-white bg-black rounded-md font-semibold p-2 hover:scale-105"
          onClick={() => {
            openModal("projects");
          }}
        >
          Add project
        </button>
      </div>
    </div>
  );
};

export default InformationInputBox;
