import React, { useState, useEffect } from "react";
import API from "../Settings/API";

export default function LoadUsers() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    setIsLoading(true);
    // console.dir(API.loadWithAxios({page: currentPage}).then((data) => setUsers(data.results)))
    API.loadWithAxios({ page: currentPage }).then((data) =>
      setUsers(data.results)
    );
    // setUsers(API.loadTestData());
    setIsLoading(false);
  }, [currentPage]);

  return (
    <>
      {isError && <p>Error load</p>}
      {isLoading && <p>Load...</p>}
      <button onClick={prevPage}>prev page</button>
      <button onClick={nextPage}>next page</button>
      <h2>Page: {currentPage}</h2>
      <ol>
        {users.map((user, id) => (
          <li key={id}>{JSON.stringify(user)}</li>
        ))}
      </ol>
    </>
  );
}
