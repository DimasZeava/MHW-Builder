const SearchBar = () => {
  return (
    <div className="search-bar flex justify-center items-center p-2 ">
      <input type="text" className="search-input p-2 w-xl bg-zinc-800 text-zinc-100 rounded-lg" placeholder="Search armor piece..." />
      <button className="search-button p-2 bg-zinc-500 text-zinc-100 rounded-lg cursor-pointer hover:bg-zinc-800 transition">Search</button>
    </div>
  )
}

export default SearchBar