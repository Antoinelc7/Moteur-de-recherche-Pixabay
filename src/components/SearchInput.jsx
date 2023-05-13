export default function SearchInput({ searchElement, setSearchElement }) {

    const handleChange = (event) => {
      setSearchElement(event.target.value);
    };
  

    
    return (
      <input
        className="h-6 w-56 rounded-md outline-none m-4 pl-1"
        type="search"
        name="search"
        value={searchElement}
        placeholder="Rechercher des images..."
        onChange={handleChange}
      />
    );
  }  