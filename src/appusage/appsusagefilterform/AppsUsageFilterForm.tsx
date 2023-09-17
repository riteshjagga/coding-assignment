import React, {useEffect, useState} from 'react'

interface AppsUsageFilterForm {
  filterText: string
  onChange: (event: CustomEvent) => void
}

const AppsUsageFilterForm = ({filterText, onChange}: AppsUsageFilterForm) => {
  const [value, setValue] = useState(filterText)

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(new CustomEvent('filterchange', {detail: value}))
    }, 300);

    return () => clearTimeout(timeout);
  }, [value]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <div>
      <label htmlFor='apps-usage-filter' className='ca-pr-8'>Filter</label>
      <input 
        style={{width: '200px'}}
        type='text'
        id='apps-usage-filter'
        name='apps-usage-filter'
        placeholder='Filter by name or location'
        onChange={handleFilterChange}/>
    </div>
  )
}
export default AppsUsageFilterForm
