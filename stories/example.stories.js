import React from "react";

export default {
  title: "Example",
  component: Example
};

export const Example = () => (
  <div className={"flex w-full h-16"}>
    <div className={"grid w-3/4 h-full grid-cols-3"}>
      <div className={"bg-gray-100"}>A</div>
      <div className={"bg-gray-200"}>B</div>
      <div className={"bg-gray-300"}>C</div>
    </div>
  </div>
);
