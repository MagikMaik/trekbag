import Logo from "./Logo";
import Counter from "./Counter";

export default function Header({ itemsPacked, totalNumberOfItems }) {
  return (
    <header>
      <Logo />
      <Counter
        itemsPacked={itemsPacked}
        totalNumberOfItems={totalNumberOfItems}
      />
    </header>
  );
}
