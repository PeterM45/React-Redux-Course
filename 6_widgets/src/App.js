import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React?",
    content: "React is a front end JS framework",
  },
  {
    title: "Why use React?",
    content: "React is a favourite JS library amond engineers",
  },
  {
    title: "How do you use React?",
    content: "By creating components",
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};