import React from 'react'
import classNames from 'classnames';
import SpinnerSvg from './Spinner.svg';
import Styles from './Spinner.module.css'

interface SpinnerProps {
  className: string
}

const Spinner = ({className}: SpinnerProps) => {
  return (
    <img 
      src={`data:image/svg+xml,${SpinnerSvg}`}
      className={classNames(className, Styles.spinner)}
    />
  )
}

export default Spinner
