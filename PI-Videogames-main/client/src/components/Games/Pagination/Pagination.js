import React from "react";
import "./Pagination.css";

const Pagination = ({ gamesPerPage, totalGames, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((num) => (
          <li key={num} className={"page-item"}>
            <button onClick={() => paginate(num)} className="page-link">
              {num}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
