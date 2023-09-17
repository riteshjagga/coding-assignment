import React, {useState, useEffect} from 'react'
import Icon from '@mdi/react';
import {mdiTable, mdiChartBar} from '@mdi/js'
import classNames from 'classnames';
import AppUsageApi from './api/AppUsageApi'
import AppsUsageTable from './appsusagetable/AppsUsageTable'
import AppUsageInterface from './interfaces/AppUsageInterface'
import AddAppUsageForm from './addappusageform/AddAppUsageForm'
import Pagination from '../components/pagination/Pagination'
import AppsUsageFilterForm from './appsusagefilterform/AppsUsageFilterForm'
import SortOnInterface from '../interfaces/SortOnInterface'
import AppsUsageTableSortFieldEnum from './interfaces/AppsUsageTableSortFieldEnum'
import SortDirectionEnum from '../interfaces/SortDirectionEnum'
import AppsUsageChart from './appsusagechart/AppsUsageChart'
import AppUsageViewAsEnum from './interfaces/AppUsageViewAsInterface'
import {capitalizeFirstLetter} from '../helpers/Utils';
import Styles from './AppUsageModule.module.css'

const AppUsageModule = () => {
  const [loading, setLoading] = useState(true)
  const [appsUsage, setAppsUsage] = useState<AppUsageInterface[]>([])
  const [names, setNames] = useState<Array<string>>([])
  const [volumes, setVolumes] = useState<Array<number>>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [filterText, setFilterText] = useState<string>('')
  const [sortOn, setSortOn] = useState<SortOnInterface>({name: 'name', direction: SortDirectionEnum.NONE}) 
  const [viewAs, setViewAs] = useState<AppUsageViewAsEnum>(AppUsageViewAsEnum.TABLE)

  useEffect(() => {
    async function getAppsUsage() {
        setLoading(true)
        const appsUsageResponse = await AppUsageApi.getAppsUsage(currentPage, filterText, sortOn)
        
        const totalPages = Math.ceil(appsUsageResponse.totalItems / appsUsageResponse.itemsPerPage)
        setTotalPages(totalPages)
        setAppsUsage(appsUsageResponse.items)

        setNames(appsUsageResponse.items.map(item => item.name))
        setVolumes(appsUsageResponse.items.map(item => item.volume))
        setLoading(false)
    }
    
    getAppsUsage()
  }, [filterText, sortOn, currentPage])

  const handleFilterTextChange = (event: CustomEvent) => {
    setFilterText(event.detail)
  }

  const handlePageChange = (event: CustomEvent) => {
      const requestedPage = event.detail
      setCurrentPage(requestedPage)
      console.log('Requested Page', requestedPage)
  }

  const handleSort = (event: CustomEvent) => {
    setSortOn(event.detail)
  }

  const handleViewAsClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const requestedViewAs = (viewAs === AppUsageViewAsEnum.TABLE) ? AppUsageViewAsEnum.CHART : AppUsageViewAsEnum.TABLE
 
    setViewAs(requestedViewAs)
  }

  return (
    <main>
      <h2>&raquo; Apps Usage Module</h2>
      <div className='ca-flex-row'>
        <div className='ca-flex1'>
          <div className='ca-flex-row ca-flex-align-center'>
            <div className={classNames('ca-flex-row ca-flex-align-center ca-mr-8', Styles.viewAs)}>
              <label htmlFor='view-as' className='ca-mr-8'>View As:</label>
              <button 
                type='button'
                id='view-as'
                className='ca-text-transform-capitalize'
                aria-label={`View As ${viewAs}`}
                title={capitalizeFirstLetter(viewAs)}
                onClick={handleViewAsClick} 
              >
                <Icon path={viewAs === AppUsageViewAsEnum.TABLE ? mdiTable : mdiChartBar} size={1} />
              </button>
            </div>
            <AppsUsageFilterForm filterText={filterText} onChange={handleFilterTextChange}></AppsUsageFilterForm>
          </div>
        </div>
        <div>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}></Pagination>
        </div>
      </div>
      
      {viewAs === AppUsageViewAsEnum.TABLE && (
        <div>
          <AppsUsageTable 
            loading={loading} 
            appsUsage={appsUsage} 
            emptyRowsCount={25}
            sortField={sortOn.name as AppsUsageTableSortFieldEnum}
            sortDirection={sortOn.direction}
            onSort={handleSort}
          ></AppsUsageTable>
        </div>
      )}

       {viewAs === AppUsageViewAsEnum.CHART && (
        <AppsUsageChart names={names} volumes={volumes}></AppsUsageChart>
       )}
      
      <AddAppUsageForm></AddAppUsageForm>
    </main>
  )
}

export default AppUsageModule
