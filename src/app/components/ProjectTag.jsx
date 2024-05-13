import React from "react";

const ProjectTag = ({name, onClick, isSelected}) => {
  const buttonStyles = isSelected
    ? "text-white border-red-600"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      onClick={() => onClick(name)}
      className={`${buttonStyles} rounded-full md:min-w-44 min-w-14 border-2 cursor-pointer md:text-xl text-sm px-6 py-3`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
