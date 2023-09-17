import React from 'react'
import {createRoot} from 'react-dom/client'
import AppUsageModule from './appusage/AppUsageModule'

const app = document.getElementById('app')
const appRoot = createRoot(app)
appRoot.render(<AppUsageModule/>)
