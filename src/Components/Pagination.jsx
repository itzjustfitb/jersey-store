import React, { useEffect, useState } from "react";

function Pagination({ totalPosts, postsPerPage, setCurrentPage, currentPage }) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="pagination">
      <div className="pagination__container">
        {pages.map((item, index) => {
          return (
            <button
              onClick={() => setCurrentPage(item)}
              key={index}
              className={item == currentPage ? "active" : ""}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Pagination;
