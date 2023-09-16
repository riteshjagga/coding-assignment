import AppUsageInterface from '../interfaces/AppUsageInterface'
import {pickRandomValue} from '../helpers/Utils';

class AppUsageApi {
  static appsUsage: AppUsageInterface[] = []
  static {
    const names = ['Alice', 'Bob', 'Charlie'];
    const locations = ['New Delhi', 'Gurgaon', 'Noida', 'Pune', 'Hyderabad', 'Chennai', 'Bengaluru'];
    const health = ['healthy', 'error', 'disabled'];

    for (let i = 0; i < 100; i++) {
      const appUsage = {
        id: (i + 1).toString(),
        name: pickRandomValue(names),
        location: pickRandomValue(locations),
        health: pickRandomValue(health),
        ip: 'abcd',
        volume: 1000000000
      }
      AppUsageApi.appsUsage.push(appUsage)      
    }
  }
  /*static appsUsage: AppUsageInterface[] = [
        {
            id: '1',
            name: 'Naruto',
            location: 'Konoha',
            health: 'healthy',
            ip: 'abcd',
            volume: 1000000000

        },
        {
            id: '2',
            name: 'Sasuke',
            location: 'Orochimaru Hidden Village',
            health: 'error',
            ip: 'abcd',
            volume: 300000000

        }
    ]*/

  public static getAppsUsage(page: number, filterText: string): Promise<AppUsageInterface[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(AppUsageApi.appsUsage)
      }, 2000)
    })
  }
}

export default AppUsageApi
