import React from "react";
import Button from "./Button";
import { secondaryButtons } from "../lib/constants";

export default function ButtonGroup({
  resetAll,
  removeAll,
  markAll,
  unMarkAll,
}) {
  const secondaryButtons = [
    {
      text: "All Done",
      onClick: markAll,
      buttonType: "secondary",
    },
    {
      text: "All Not Done",
      onClick: unMarkAll,
      buttonType: "secondary",
    },
    {
      text: "Reset All",
      onClick: resetAll,
      buttonType: "secondary",
    },
    {
      text: "Remove All",
      onClick: removeAll,
      buttonType: "secondary",
    },
  ];
  return (
    <section className="button-group">
      {secondaryButtons.map((button) => (
        <Button
          key={button.text}
          onClick={button.onClick}
          buttonType={button.buttonType}
          text={button.text}
        />
      ))}
    </section>
  );
}
