import React from "react";

export default {
  title: "Layout",
  component: Layout
};

export const Layout = () => (
  <div className="grid grid-cols-10 h-screen w-screen">
    <div className="col-span-2">sidebar</div>
    <div className="col-span-8 flex flex-col">
      <div className="h-24">content header</div>
      <div className="flex flex-col overflow-scroll">content</div>
    </div>
  </div>
);
