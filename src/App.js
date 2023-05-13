import { useState, useEffect } from "react";
import SearchInput from "./components/SearchInput";
import Pagination from "./components/Pagination";

function App() {

  const [searchElement, setSearchElement] = useState("");
  const [imagesResults, setImagesResults] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const URL = `https://pixabay.com/api/?key=36339911-4d076b336df5d8cdf412454cd&q=${searchElement}&image_type=photo&pretty=true&per_page=9`;



  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`${URL}&page=${currentPage}`);
      result.json().then((json) => {
        setImagesResults(json.hits);
        setTotalPages(Math.ceil(json.totalHits / 9));
      });
    };
    fetchData();
  });


  
  return (
    <div className="min-h-screen text-center bg-slate-900">
      <SearchInput
        searchElement={searchElement}
        setSearchElement={setSearchElement}
      />
      <div className="flex flex-wrap justify-center">
        {imagesResults.map((image) => (
          <img
            className="rounded-lg h-72 w-1/4 m-1"
            key={image.id}
            src={image.webformatURL}
            alt={image.tags}
          />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;