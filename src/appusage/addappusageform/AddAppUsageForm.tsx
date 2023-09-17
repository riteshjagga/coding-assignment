import React, {useState} from 'react'
import classNames from 'classnames'
import Styles from './AddAppUsageForm.module.css'

const AddAppUsageForm = () => {
  const [appName, setAppName] = useState('')
  const [appNameError, setAppNameError] = useState(false)
  const [appVolume, setAppVolume] = useState('')
  const [appVolumeError, setAppVolumeError] = useState(false)
  const formContainsError = appNameError || appVolumeError

  const handleAppNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setAppName(value)
    setAppNameError(value === '')
  }

  const handleAppVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setAppVolume(value)
    setAppVolumeError(value === '')
  }

  const handleSubmitClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setAppNameError(appName === '')
    setAppVolumeError(appVolume === '')
    
    if (appName && appVolume) {
      console.log(appName, appVolume)
    }
  }
  
  return (
    <form 
      aria-labelledby='app-usage-form'
      aria-describedby='app-usage-form-description'>
      <h2 id='app-usage-form-label'>&raquo; Add App Usage Form</h2>
      <p id='app-usage-form-description'>Fill the App Name and Volume. Upon passing required validation, field values are logged into the console.</p>
      <div className={classNames(Styles.formControl, {[Styles.error] : appNameError})}>
        <label htmlFor='app-name'>App Name <span className='ca-reqd' aria-hidden>*</span></label>
        <input
          id='app-name'
          name='appName'
          required
          type='text'
          className={Styles.input}
          onChange={handleAppNameChange}
          aria-invalid={appNameError}
          aria-describedby='app-name-error'/>
        {appNameError && <div role='alert' className={Styles.inputError} id='app-name-error'>This field is required</div>}
      </div>
      <div className={classNames(Styles.formControl, {[Styles.error] : appVolumeError})}>
        <label htmlFor='app-volume'>App Volume <span className='ca-reqd' aria-hidden>*</span></label>
        <input 
          id='app-volume'
          name='appVolume'
          required
          type='number'
          min={0}
          className={Styles.input}
          onChange={handleAppVolumeChange}
          aria-invalid={appVolumeError}
          aria-describedby='app-volume-error'/>
        {appVolumeError && <div role='alert' className={Styles.inputError} id='app-volume-error'>This field is required</div>}
      </div>
      <div className={Styles.formControl}>
        <button type='submit' onClick={handleSubmitClick}>Submit</button>
      </div>
    </form>
  )
}

export default AddAppUsageForm
