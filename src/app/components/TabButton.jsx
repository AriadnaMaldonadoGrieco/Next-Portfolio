import React from "react";

const TabButton = ({active, selectTab, children}) => {
  const buttonClasses = active
    ? 'text-white border-b border-red-600'
    : 'text-[#ADB7BE]';
  return (
    <button onClick={selectTab}>
      <div className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>{children}</div>
    </button>
  );
};

export default TabButton;
