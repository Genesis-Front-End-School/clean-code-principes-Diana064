import {
  Button,
  PaginationWrapper,
  PrevPage,
  NextPage,
} from './Pagination.module';

function Pagination({ currentPage, totalPages, setCurrentPage }) {
  const goToPreviousPage = () => {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  };
  const goToNextPage = () => {
    setCurrentPage(currentPage => Math.min(currentPage + 1, totalPages));
  };
  return (
    <PaginationWrapper>
      <Button disabled={currentPage === 1} onClick={goToPreviousPage}>
        <PrevPage />
      </Button>
      <div>
        <span> {currentPage}</span> of <span>{totalPages}</span>
      </div>
      <Button disabled={currentPage === totalPages} onClick={goToNextPage}>
        <NextPage />
      </Button>
    </PaginationWrapper>
  );
}
export default Pagination;
