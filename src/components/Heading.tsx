import React from "react";

const Heading = ({text}: {text: string}) => {
  return (
    <div className="text-primaryblue px-8 py-[10px] text-sm font-medium bg-secondaryblue/10 w-fit rounded-lg shadow-sm">
      {text}
    </div>
  );
};

export default Heading;
