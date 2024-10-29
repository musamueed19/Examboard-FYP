"use client";

import Image from "next/image";
import AddBtn from "./AddBtn";
import { useState } from "react";
import SemesterForm from "../Forms/SemesterForm";
import UserForm from "../Forms/UserForm";
import DesignationForm from "../Forms/DesignationForm";
import CourseForm from "../Forms/CourseForm";
import LocationForm from "../Forms/LocationForm";
import MessageStrip from "./MessageStrip";

// let visible = false;
// let content = ""
// export function showMessageStrip(
//   isOpen,
//   message = "New Record has Added Successfully"
// ) {
//   console.log("param of message func - isOpen", isOpen, message);
//   visible = isOpen;
//   content = message;
// }

export default function FormModal({ table, type, data, id, title }) {
  const [isVisible, setIsVisible] = useState(false);
  const [content, setContent] = useState("No message");

  const styles =
    type === "update"
      ? `hover:bg-[#cadffd] p-1 rounded-md`
      : type === "view"
      ? `hover:bg-[#cadffd] p-[0.3rem] rounded-md`
      : `hover:bg-[#ffc5c5] p-1 rounded-md`;

  const forms = {
    semesters: (type, data) => (
      <SemesterForm
        type={type}
        setOpen={setOpen}
        setIsVisible={setIsVisible}
        setContent={setContent}
        data={data}
      />
    ),
    users: (type, data) => (
      <UserForm
        type={type}
        setOpen={setOpen}
        setIsVisible={setIsVisible}
        setContent={setContent}
        data={data}
      />
    ),
    designations: (type, data) => (
      <DesignationForm
        type={type}
        setOpen={setOpen}
        setIsVisible={setIsVisible}
        setContent={setContent}
        data={data}
      />
    ),
    locations: (type, data) => (
      <LocationForm
        type={type}
        setOpen={setOpen}
        setIsVisible={setIsVisible}
        setContent={setContent}
        data={data}
      />
    ),
    faculties: (type, data) => (
      <UserForm
        type={type}
        setOpen={setOpen}
        setIsVisible={setIsVisible}
        setContent={setContent}
        data={data}
      />
    ),
    courses: (type, data) => (
      <CourseForm
        type={type}
        setOpen={setOpen}
        setIsVisible={setIsVisible}
        setContent={setContent}
        data={data}
      />
    ),
  };

  const [open, setOpen] = useState(false);
  let btnTitle = table.slice(0, -1);

  function modalHandler({ table, type, id, data, isOpen }) {
    console.log(table, type, isOpen, id, data);
    setOpen(isOpen);
  }
  // console.log(content);
  return (
    <>
      {type !== "create" ? (
        <button
          className={`${styles} other common tailwind classes`}
          onClick={() => modalHandler({ table, type, id, data, isOpen: true })}
        >
          <Image
            src={`/${type}.svg`}
            alt={`${type} icon`}
            width={16}
            height={16}
          />
        </button>
      ) : (
        <AddBtn title={title} onClick={modalHandler} />
      )}

      {open && (
        <div className="fixed w-full h-full bg-black bg-opacity-60 left-0 top-0 flex items-center justify-center z-50">
          {isVisible && (
            <MessageStrip
              content={content}
              setIsVisible={setIsVisible}
              isVisible={isVisible}
            />
          )}

          <div className="bg-white rounded-md w-[40%] h-fit flex justify-center items-center relative z-60">
            <button
              onClick={() => setOpen(!open)}
              className="absolute scale-70 top-3 px-2 right-3 text-white"
            >
              <Image src="/cross.svg" width={16} height={16} alt="close icon" />
            </button>

            {forms[table](type, data)}
          </div>
        </div>
      )}
    </>
  );
}
