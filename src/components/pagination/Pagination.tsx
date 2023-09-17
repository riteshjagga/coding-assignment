import React from 'react'
import Styles from './Pagination.module.css'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (event: CustomEvent) => void
}

const Pagination = ({currentPage, totalPages, onPageChange}: PaginationProps) => {
  const handleFirstClick = () => {
    onPageChange(new CustomEvent('pagechange', {detail: 1}))
  }

  const handleLastClick = () => {
    onPageChange(new CustomEvent('pagechange', {detail: totalPages}))
  }

  const handlePrevClick = () => {
    const requestedPage = currentPage - 1
    if (requestedPage >= 1) {
      onPageChange(new CustomEvent('pagechange', {detail: requestedPage}))
    }
  }

  const handleNextClick = () => {
    const requestedPage = currentPage + 1
    if (requestedPage <= totalPages) {
      onPageChange(new CustomEvent('pagechange', {detail: requestedPage}))
    }
  }

  return (
    <div className={Styles.pagination}>
      <button type="button" onClick={handleFirstClick}>First</button>
      <button type="button" onClick={handlePrevClick}>Prev</button>
      <span>Page: {currentPage}/{totalPages}</span>
      <button type="button" onClick={handleNextClick}>Next</button>
      <button type="button" onClick={handleLastClick}>Last</button>
    </div>
  )
}

export default Pagination
