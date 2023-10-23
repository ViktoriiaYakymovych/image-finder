export const Searchbar = ({ onSubmit }) => {
  return (
    <header>
      <form onSubmit={e => onSubmit(e)}>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
