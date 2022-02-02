import PropTypes from "prop-types";
import { PaginateButton } from "../PaginateButton/PaginateButton";

export const PaginateButtons = ({
  currentPage,
  numberOfPages,
  arrayFromNumberOfPages,
  paginate,
}) => {
  let previousPageButtons = null,
    nextPageButtons = null,
    paginateButtons = null;

  const firstButton = (
    <PaginateButton key={1} pageNumber={1} paginate={paginate} />
  );

  const lastButton = (
    <PaginateButton
      key={numberOfPages}
      pageNumber={numberOfPages}
      paginate={paginate}
    />
  );

  if (currentPage > 1) {
    previousPageButtons = (
      <PaginateButton pageNumber={currentPage - 1} paginate={paginate}>
        <i className={`fas fa-chevron-left`}></i>
      </PaginateButton>
    );
  }

  if (currentPage < numberOfPages) {
    nextPageButtons = (
      <PaginateButton pageNumber={currentPage + 1} paginate={paginate}>
        <i className={`fas fa-chevron-right`}></i>
      </PaginateButton>
    );
  }

  if (currentPage < 5) {
    paginateButtons = [...arrayFromNumberOfPages]
      .slice(0, 5)
      .map((pageNumber) => (
        <PaginateButton
          key={pageNumber}
          pageNumber={pageNumber}
          paginate={paginate}
        />
      ));

    return (
      <>
        {previousPageButtons}
        {paginateButtons}
        <PaginateButton pageNumber={currentPage + 3} paginate={paginate}>
          <span>...</span>
        </PaginateButton>
        {lastButton}
        {nextPageButtons}
      </>
    );
  }

  if (currentPage >= 5 && currentPage <= numberOfPages - 4) {
    paginateButtons = [...arrayFromNumberOfPages]
      .slice(currentPage - 2, currentPage + 1)
      .map((pageNumber) => (
        <PaginateButton
          key={pageNumber}
          pageNumber={pageNumber}
          paginate={paginate}
        />
      ));

    return (
      <>
        {previousPageButtons}
        {firstButton}
        <PaginateButton pageNumber={currentPage - 3} paginate={paginate}>
          <span>...</span>
        </PaginateButton>
        {paginateButtons}
        <PaginateButton pageNumber={currentPage + 3} paginate={paginate}>
          <span>...</span>
        </PaginateButton>
        {lastButton}
        {nextPageButtons}
      </>
    );
  }

  if (currentPage >= numberOfPages - 4) {
    paginateButtons = [...arrayFromNumberOfPages]
      .slice(arrayFromNumberOfPages.length - 5)
      .map((pageNumber) => (
        <PaginateButton
          key={pageNumber}
          pageNumber={pageNumber}
          paginate={paginate}
        />
      ));

    return (
      <>
        {previousPageButtons}
        {firstButton}
        <PaginateButton pageNumber={currentPage - 3} paginate={paginate}>
          <span>...</span>
        </PaginateButton>
        {paginateButtons}
        {nextPageButtons}
      </>
    );
  }
};

PaginateButtons.propTypes = {
  currentPage: PropTypes.number,
  numberOfPages: PropTypes.number,
  arrayFromNumberOfPages: PropTypes.arrayOf(PropTypes.number),
  paginate: PropTypes.func,
};
