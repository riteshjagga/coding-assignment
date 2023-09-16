import React from 'react'
import {createRoot} from 'react-dom/client'
import AppModule from './appusage/AppUsageModule'

const app = document.getElementById('app')
const appRoot = createRoot(app)
appRoot.render(<AppModule/>)
