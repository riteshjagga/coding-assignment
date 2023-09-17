import React from 'react'
import {render} from '@testing-library/react'
import Badge from './Badge'
import BadgeStatusEnum from './BadgeStatusEnum'

describe('Badge Component', () => {
  it('contains a label', () => {
    const {container} = render(<Badge data-testid='success-badge' label='Healthy' type={BadgeStatusEnum.HEALTHY} />)    
    const badge = container.querySelector('.status')

    expect(badge).toBeInTheDocument()
  })
})
