export default function Counter({ itemsPacked, totalNumberOfItems }) {
  return (
    <div>
      <p>
        <b>
          {itemsPacked}/{totalNumberOfItems} items packed
        </b>
      </p>
    </div>
  );
}
