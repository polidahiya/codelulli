import React from "react";
import ClipPathPage from "./Clientpage";

function page() {
  return (
    <div>
      <ClipPathPage />
    </div>
  );
}
export async function generateMetadata() {
  return {
    title:
      "Responsive Preview Tool – Test Website on Mobile, Tablet & Desktop Screens",
    description:
      "Use our free responsive preview tool to test how your website looks on different screen sizes like iPhone, iPad, Android, Laptop, and 2K Desktop. Rotate, resize, and analyze your design responsively.",
    keywords:
      "responsive preview tool , website screen tester , mobile preview , tablet preview , responsive design testing , iPhone website preview , iPad preview , responsive iframe viewer , viewport simulator , responsive website demo",
  };
}

export default page;
