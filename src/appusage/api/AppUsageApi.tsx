import AppUsageInterface from '../interfaces/AppUsageInterface'
import AppsUsageApiResponseInterface from '../interfaces/AppsUsageApiResponseInterface'
import {pickRandomValue} from '../../helpers/Utils';
import AppsUsageTableSortFieldEnum from '../interfaces/AppsUsageTableSortFieldEnum';
import SortDirectionEnum from '../../interfaces/SortDirectionEnum';
import SortOnInterface from '../../interfaces/SortOnInterface';

class AppUsageApi {
  static appsUsage: AppUsageInterface[] = []

  static {
    const names = ['Alice', 'Bob', 'Charlie', 'Zion'];
    const locations = ['New Delhi', 'Gurgaon', 'Noida', 'Pune', 'Hyderabad', 'Chennai', 'Bengaluru'];
    const health = ['healthy', 'error', 'disabled'];

    const volumes: Array<number> = []
    for(let i = 1; i <= 10; i++) {
      volumes.push(i * 100000000)
    }
    

    for (let i = 0; i < 10000; i++) {
      const appUsage = {
        id: (i + 1).toString(),
        name: pickRandomValue(names),
        location: pickRandomValue(locations),
        health: pickRandomValue(health),
        ip: 'abcd',
        volume: pickRandomValue(volumes)
      }

      AppUsageApi.appsUsage.push(appUsage)
    }
  }

  public static getAppsUsage(
    page: number = 1,
    filterText: string = '',
    sortOn: SortOnInterface = null): Promise<AppsUsageApiResponseInterface> {
    let filterdItems = AppUsageApi.appsUsage

    /* Apply Filtering on Name and Location only */
    if (filterText !== '') {
      filterdItems = AppUsageApi.appsUsage.filter((appUsage) => {
        if (appUsage.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1
          || appUsage.location.toLowerCase().indexOf(filterText.toLowerCase()) !== -1) {
          return appUsage
        }
      })
    }

    /* Apply Sort on Name and Location only */
    if (sortOn) {
      filterdItems = filterdItems.sort((a, b) => {
        const sortField = sortOn.name as keyof Pick<AppUsageInterface, 'name' | 'location'>
        return (
          sortOn.direction === SortDirectionEnum.ASCENDING 
          ? a[sortField].localeCompare(b[sortField])
          : b[sortField].localeCompare(a[sortField])
        )
      })
    }

    /* Apply Pagination on Original or Filtered items */
    const itemsPerPage = 25
    const totalItems = filterdItems.length

    const fromIndex = (page - 1) * itemsPerPage
    const toIndex = fromIndex + itemsPerPage
    const items = filterdItems.slice(fromIndex, toIndex)

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({items, itemsPerPage, totalItems}), 1000)
    })
  }
}

export default AppUsageApi
