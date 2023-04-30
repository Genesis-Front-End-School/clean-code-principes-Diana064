import React from 'react';
import {
  Button,
  PaginationWrapper,
  PrevPage,
  NextPage,
} from './Pagination.module';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  setCurrentPage: (currentPage: (page: number) => number) => void;
};

function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}: PaginationProps) {
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
