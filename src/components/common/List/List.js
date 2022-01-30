import { useState, useEffect } from "react";
import { Pagination } from "../Pagination/Pagination";
import { NumberOfTransactionsWidget } from "../NumberOfTransactionsWidget/NumberOfTransactionsWidget";
import { requestForPostsList } from "../../../services/api/transactionsListService";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
`;

const StyledItem = styled.li`
  font-size: 20px;
  border-bottom: 1px solid #4a4a4a;
`;

export const List = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [actualPage, setActualPage] = useState(1);
  const [entriesOnPage, setEntriesOnPage] = useState(10);

  const options = { actualPage: actualPage, entriesOnPage: entriesOnPage };

  const getpostsList = async () => {
    try {
      setLoading(true);
      const response = await requestForPostsList(options);
      setPosts(response);
    } catch (error) {
      throw new Error("The posts list cannot be displayed.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getpostsList();
  }, [actualPage, entriesOnPage]);

  const paginate = (pageNumber) => setActualPage(pageNumber);

  const pageEntriesHandler = (number) => setEntriesOnPage(number);

  if (loading) {
    return <p>Data is loading...</p>;
  }

  return (
    <div>
      <StyledList>
        {posts.map((post) => {
          return <StyledItem key={post.id}>{post.body}</StyledItem>;
        })}
      </StyledList>
      <Pagination
        entriesOnPage={options.entriesOnPage}
        actualPage={actualPage}
        paginate={paginate}
      />
      <NumberOfTransactionsWidget
        entriesOnPage={entriesOnPage}
        pageEntriesHandler={pageEntriesHandler}
      />
    </div>
  );
};
