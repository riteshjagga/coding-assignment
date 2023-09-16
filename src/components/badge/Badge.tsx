import React from 'react'
import classNames from 'classnames'
import BadgeStatusEnum from './BadgeStatusEnum'
import Styles from './Badge.module.css'

export interface BadgeProps {
  label: string
  type: BadgeStatusEnum
}

const Badge = ({label, type}: BadgeProps) => {
  return (
    <div className={classNames(Styles.status, Styles[type])}>
      {label}
    </div>
  )
}

export default Badge
