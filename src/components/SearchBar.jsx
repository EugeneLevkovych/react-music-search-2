export default function SearchBar({ query, setQuery, onSearch }) {


function handleSubmit(e) {
  e.preventDefault();
  onSearch(query);
   console.log(query);
}

  return (
    <>
     <form className="search-bar" onSubmit={handleSubmit}>
      <input
       className="search-bar__input"
       type="text"
       placeholder="Search music..."
       value={query}
       onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-bar__button" 
      type="submit"
      onClick={handleSubmit}>
        Search
      </button>
     </form>
    </>
  );
}