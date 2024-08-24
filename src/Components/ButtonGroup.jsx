import Button from "./Button";

import { useItemsStore } from "../Stores/itemStore";

export default function ButtonGroup() {
  const handleMarkAll = useItemsStore((state) => state.handleMarkAll);
  const handleUnMarkAll = useItemsStore((state) => state.handleUnMarkAll);
  const handleReset = useItemsStore((state) => state.reset);
  const handleRemoveAllItems = useItemsStore((state) => state.removeAllItems);
  const secondaryButtons = [
    {
      text: "All Done",
      onClick: handleMarkAll,
      buttonType: "secondary",
    },
    {
      text: "All Not Done",
      onClick: handleUnMarkAll,
      buttonType: "secondary",
    },
    {
      text: "Reset All",
      onClick: handleReset,
      buttonType: "secondary",
    },
    {
      text: "Remove All",
      onClick: handleRemoveAllItems,
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
