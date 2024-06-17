import React from "react";

const Title = ({ data }) => {
  const { subTitle, title, content } = data.bio;

  const renderContent = (content) => {
    return content.map((item, index) => {
      if (typeof item === "string") {
        return item;
      } else if (item.type === "span") {
        return (
          <span key={index} className={item.className}>
            {item.text}
          </span>
        );
      }
      return null;
    });
  };

  return (
    <section className="flex flex-col items-center">
      <h4 className="font-[700] text-[18px] text-secondary">{subTitle}</h4>
      <h2 className="font-[700] text-[50px] text-primary">{title}</h2>
      <p className="text-secondary text-[22px] w-[300px] sm:w-[800px] text-justify my-10">
        {renderContent(content)}
      </p>
    </section>
  );
};

export default Title;
