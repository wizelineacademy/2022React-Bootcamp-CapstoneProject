import { ControllsContainer, PageLabel, ControllButton } from "./styled";
import PropTypes from "prop-types";

const PageControlls = ({ setCurrentPage, pages, currentPage }) => {
  const handleCurrentPage = (e) => {
    const value = e.target.id;
    setCurrentPage(parseInt(value));
  };

  const handlePage = (e) => {
    const action = e.target.name;

    if (currentPage >= pages) {
      setCurrentPage(1);
      return;
    } else if (currentPage <= 1) {
      setCurrentPage(pages);
      return;
    }

    setCurrentPage((currentPage) =>
      action === "prev" ? currentPage - 1 : currentPage + 1
    );
  };

  return (
    <ControllsContainer>
      <ControllButton name="prev" onClick={handlePage}>
        Prev
      </ControllButton>
      {[...Array(pages)].map((x, i) => (
        <PageLabel
          id={i + 1}
          key={i}
          select={currentPage === i + 1}
          onClick={handleCurrentPage}
        >
          {i + 1}
        </PageLabel>
      ))}
      <ControllButton name="next" onClick={handlePage}>
        Next
      </ControllButton>
    </ControllsContainer>
  );
};

PageControlls.propTypes = {
  setCurrentPage: PropTypes.func,
  pages: PropTypes.number,
  currentPage: PropTypes.number,
};

export default PageControlls;
