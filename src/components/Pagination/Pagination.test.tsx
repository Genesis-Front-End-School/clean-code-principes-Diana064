/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination component', () => {
  test('renders current page and total pages', () => {
    const { getByText } = render(
      <Pagination
        currentPage={2}
        totalPages={5}
        pageSize={0}
        setCurrentPage={() => {}}
      />
    );
    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('5')).toBeInTheDocument();
  });

  test('disables prev button when on first page', () => {
    const { getByRole } = render(
      <Pagination
        currentPage={1}
        totalPages={5}
        pageSize={0}
        setCurrentPage={() => {}}
      />
    );
    const prevButton = getByRole('button', { name: /previous/i });
    expect(prevButton).toBeDisabled();
  });

  test('disables next button when on last page', () => {
    const { getByRole } = render(
      <Pagination
        currentPage={5}
        totalPages={5}
        pageSize={0}
        setCurrentPage={() => {}}
      />
    );
    const nextButton = getByRole('button', { name: /next/i });
    expect(nextButton).toBeDisabled();
  });

  test('calls setCurrentPage when prev button is clicked', () => {
    const setCurrentPageMock = jest.fn();
    const { getByRole } = render(
      <Pagination
        currentPage={2}
        totalPages={5}
        setCurrentPage={setCurrentPageMock}
        pageSize={0}
      />
    );
    const prevButton = getByRole('button', { name: /previous/i });
    fireEvent.click(prevButton);
    expect(setCurrentPageMock).toHaveBeenCalledWith(1);
  });

  test('calls setCurrentPage when next button is clicked', () => {
    const setCurrentPageMock = jest.fn();
    const { getByRole } = render(
      <Pagination
        currentPage={2}
        totalPages={5}
        setCurrentPage={setCurrentPageMock}
        pageSize={0}
      />
    );
    const nextButton = getByRole('button', { name: /next/i });
    fireEvent.click(nextButton);
    expect(setCurrentPageMock).toHaveBeenCalledWith(3);
  });
});
