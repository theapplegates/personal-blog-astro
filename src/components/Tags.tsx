import React from "react";

const Tags = ({
  list,
  className = "",
}: {
  list: string[];
  className?: string;
}) => {
  return (
    <div className={`not-prose flex flex-wrap w-full gap-2 ${className}`}>
      {list.map((tag) => (
        <span className="tag" key={tag}>
          # {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
