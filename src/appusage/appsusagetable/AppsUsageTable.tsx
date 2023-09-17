import React, { useState } from 'react'
import Icon from '@mdi/react';
import {
  mdiSortAlphabeticalAscendingVariant,
  mdiSortAlphabeticalDescendingVariant,
  mdiSortAlphabeticalVariant, 
} from '@mdi/js';
import UserInterface from '../interfaces/AppUsageInterface'
import Styles from './AppsUsageTable.module.css'
import Badge from '../../components/badge/Badge'
import BadgeStatusEnum from '../../components/badge/BadgeStatusEnum'
import Spinner from '../../components/spinner/Spinner'
import AppsUsageTableSortFieldEnum from '../interfaces/AppsUsageTableSortFieldEnum'
import SortDirectionEnum from '../../interfaces/SortDirectionEnum'
import SortOnInterface from '../../interfaces/SortOnInterface';

const SortDirectionIconEnum = Object.freeze({
  [SortDirectionEnum.ASCENDING]: mdiSortAlphabeticalAscendingVariant,
  [SortDirectionEnum.DESCENDING]: mdiSortAlphabeticalDescendingVariant,
  [SortDirectionEnum.NONE]: mdiSortAlphabeticalVariant,
})

interface AppsUsageTableProps {
  appsUsage: UserInterface[]
  loading?: boolean
  emptyRowsCount?: number
  sortFields?: Array<SortOnInterface>
  sortField: AppsUsageTableSortFieldEnum
  sortDirection: SortDirectionEnum
  onSort: (event: CustomEvent<SortOnInterface>) => void
}

const AppsUsageTable = ({
  appsUsage,
  loading = true,
  emptyRowsCount = 6,
  sortField = AppsUsageTableSortFieldEnum.NAME,
  sortDirection = SortDirectionEnum.NONE,
  onSort}: AppsUsageTableProps) => {
  let sortFields: Array<SortOnInterface> = [
    {name: AppsUsageTableSortFieldEnum.NAME, direction: SortDirectionEnum.NONE},
    {name: AppsUsageTableSortFieldEnum.LOCATION, direction: SortDirectionEnum.NONE}
  ]

  sortFields = sortFields.map(field => {
    field.direction = field.name === sortField ? sortDirection : SortDirectionEnum.NONE

    return field
  })

  const getSortDirection = (sortField: AppsUsageTableSortFieldEnum): SortDirectionEnum => {
    const field = sortFields.find(field => field.name === sortField)
    
    return field.direction
  }

  const handleColumnClick = (sortField: AppsUsageTableSortFieldEnum) => {
    const requestedDirection = sortDirection === SortDirectionEnum.ASCENDING ? SortDirectionEnum.DESCENDING : SortDirectionEnum.ASCENDING

    onSort(new CustomEvent('sort', {detail: {name: sortField, direction: requestedDirection}}))
  }

  return (
    <div>
      <h3 id='app-usage-table'>&raquo;&raquo; Apps Usage Table</h3>
      <div className={Styles.tableContainer}>
        {loading && (
          <div className={Styles.spinnerContainer}>
            <Spinner className={Styles.spinner}/>
          </div>
        )}
        <table className={Styles.appsUsageTable} aria-labelledby='app-usage-table'>
          <thead>
            <tr>
              <th>Id</th>
              <th 
                role='button'
                tabIndex={0}
                onClick={() => handleColumnClick(AppsUsageTableSortFieldEnum.NAME)}
                aria-sort={getSortDirection(AppsUsageTableSortFieldEnum.NAME)}
              >
                <div className='ca-flex-row ca-flex-align-center'>
                  <span className='ca-pr-8'>Name</span>
                  <Icon path={SortDirectionIconEnum[getSortDirection(AppsUsageTableSortFieldEnum.NAME)]} size={0.75} />
                </div>
              </th>
              <th
                role='button'
                tabIndex={0}
                onClick={() => handleColumnClick(AppsUsageTableSortFieldEnum.LOCATION)}
                aria-sort={getSortDirection(AppsUsageTableSortFieldEnum.LOCATION)}>
                <div className='ca-flex-row ca-flex-align-center'>
                  <span className='ca-pr-8'>Location</span>
                  <Icon path={SortDirectionIconEnum[getSortDirection(AppsUsageTableSortFieldEnum.LOCATION)]} size={0.75} />
                </div>
              </th>
              <th>Health</th>
              <th>IP</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            {
              loading 
                ? (
                  Array.from({length: emptyRowsCount}, (_, index) => (
                    <tr key={index}>
                      <td colSpan={6}>&nbsp;</td>
                    </tr>
                  ))
                )
                : (
                  appsUsage.map(appUsage => {
                    return (
                      <tr key={appUsage.id}>
                          <td>{appUsage.id}</td>
                          <td>{appUsage.name}</td>
                          <td>{appUsage.location}</td>
                          <td>
                            <Badge type={appUsage.health as BadgeStatusEnum} label={appUsage.health}></Badge>
                          </td>
                          <td>{appUsage.ip}</td>
                          <td>{appUsage.volume} bytes</td>
                      </tr>
                    )}
                  )
                )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AppsUsageTable
