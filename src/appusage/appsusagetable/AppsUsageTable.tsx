import React from 'react'
import UserInterface from '../../interfaces/AppUsageInterface'
import Styles from './AppsUsageTable.module.css'
import Badge from '../../components/badge/Badge'
import BadgeStatusEnum from '../../components/badge/BadgeStatusEnum'
import Spinner from '../../components/spinner/Spinner'

interface AppsUsageTableProps {
  appsUsage: UserInterface[]
  loading?: boolean
  emptyRowsCount?: number
}

const AppsUsageTable = ({appsUsage, loading = true, emptyRowsCount = 6}: AppsUsageTableProps) => {
  return (
    <div className={Styles.tableContainer}>
      {loading && (
        <div className={Styles.spinnerContainer}>
          <Spinner className={Styles.spinner}/>
        </div>
      )}
      
      <table className={Styles.appsUsageTable}>
        <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Location</td>
                <td>Health</td>
                <td>IP</td>
                <td>Volume</td>
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
  )
}

export default AppsUsageTable
