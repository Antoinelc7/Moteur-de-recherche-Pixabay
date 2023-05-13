export default function Pagination({currentPage, setCurrentPage, totalPages,}) {

    const handleNextPage = () => {
      setCurrentPage(currentPage + 1);
    };
  
    const handlePreviousPage = () => {
      setCurrentPage(currentPage - 1);
    };
  

    
    return (
      <div className="flex flex-row justify-center p-3">
        {currentPage > 1 && (
          <button className="h-8 w-24 bg-white rounded-lg hover:bg-orange-300" onClick={handlePreviousPage}>Précédent</button>
        )}
        <p className="text-white ml-5 mr-5 text-xl">{currentPage}</p>
        {currentPage < totalPages && (
          <button className="h-8 w-24 bg-white rounded-lg hover:bg-orange-300" onClick={handleNextPage}>Suivant</button>
        )}
      </div>
    );
  }
  