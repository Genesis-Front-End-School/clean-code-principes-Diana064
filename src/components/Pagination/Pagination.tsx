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
  setCurrentPage: (page: number) => void;
};

function Pagination({
  currentPage,
  totalPages,
  pageSize,
  setCurrentPage,
}: PaginationProps) {
  const goToPreviousPage = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };
  const goToNextPage = () => {
    setCurrentPage(Math.min(currentPage + 1, totalPages));
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
