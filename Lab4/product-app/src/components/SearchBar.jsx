// SearchBar component which provides the search input and the checkbox.

export default function SearchBar() {
  return (
    <form>
      <input
        type="text"
        placeholder="Search"
      />
      <p>
        <input
          type="checkbox"
        />
        Only show products in stock
      </p>
    </form>
  );
}