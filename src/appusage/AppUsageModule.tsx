import React, {useState, useEffect} from 'react'
import AppUsageApi from '../api/AppUsageApi'
import AppsUsageTable from './appsusagetable/AppsUsageTable'
import AppUsageInterface from '../interfaces/AppUsageInterface'
import AddAppUsageForm from './addappusageform/AddAppUsageForm'
import Spinner from '../components/spinner/Spinner'

const AppModule = () => {
    const [loading, setLoading] = useState(true)
    const [appsUsage, setAppsUsage] = useState<AppUsageInterface[]>([])

    useEffect(() => {
        async function getAppsUsage() {
            setLoading(true)
            const appsUsage = await AppUsageApi.getAppsUsage()
            console.log(appsUsage)
            setAppsUsage(appsUsage)
            setLoading(false)
        }
        
        getAppsUsage()
    }, [])

    return (
        <main>
            <h1>Apps Usage Module</h1>
            <AppsUsageTable loading={loading} appsUsage={appsUsage}></AppsUsageTable>
            <AddAppUsageForm></AddAppUsageForm>
        </main>
    )
}

export default AppModule
