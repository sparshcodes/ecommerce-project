function Pagination({ totalItems, pageSize, pageNumber, setPageNumber }) {

  const totalPages = Math.ceil(totalItems / pageSize)

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  return (
    <div className="pagination">

      {pages.map(page => (
        <button
          key={page}
          className={`page-btn ${page === pageNumber ? "active" : ""}`}
          onClick={() => setPageNumber(page)}
        >
          {page}
        </button>
      ))}

    </div>
  )
}

export default Pagination