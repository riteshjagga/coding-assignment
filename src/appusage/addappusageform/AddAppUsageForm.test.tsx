import React from 'react'
import {fireEvent, render, screen} from '@testing-library/react'
import AddAppUsageForm from './AddAppUsageForm'

describe('Add App Usage Form Component', () => {
  describe('Form and its input elements', () => {
    beforeEach(() => {
      render(<AddAppUsageForm/>)
    })

    it('contains a form', () => {
      const form = screen.getByRole('form')

      expect(form).toBeInTheDocument()
    })
  
    it('contains a required input field for app name', () => {
      const input = screen.getByRole('textbox')

      expect(input).toBeInTheDocument()
      expect(input).toBeRequired()
    })
  
    it('contains an required input field for app volume', () => {      
      const input = screen.getByRole('spinbutton')

      expect(input).toBeInTheDocument()
      expect(input).toBeRequired()
    })
  })

  describe('Form User Interaction', () => {
    beforeEach(() => {
      render(<AddAppUsageForm/>)
    })

    it('shows multiple validation errors when both the fields are empty', () => {
      const submit = screen.getByRole('button', {name: 'Submit'})

      fireEvent.click(submit)

      const alerts = screen.getAllByRole('alert')

      expect(alerts[0]).toHaveTextContent('This field is required')
      expect(alerts[1]).toHaveTextContent('This field is required')
    })

    it('shows validation error for volume field when it is empty', () => {
      const nameInput = screen.getByRole('textbox')

      fireEvent.change(nameInput, {target: {value: 'Test App'}})

      const submit = screen.getByRole('button', {name: 'Submit'})
  
      fireEvent.click(submit)

      // Check that name input is valid and volume input field is invalid
      const volumeInput = screen.getByRole('spinbutton')
      
      expect(nameInput).toBeValid()
      expect(volumeInput).toBeInvalid()

      // Cḩeck that there is only 1 error that gets announced
      const alerts = screen.getAllByRole('alert')

      expect(alerts.length).toBe(1)
      expect(alerts[0]).toHaveTextContent('This field is required')
    })

    it('shows validation error for app field when it is empty', () => {
      const volumeInput = screen.getByRole('spinbutton')
      fireEvent.change(volumeInput, {target: {value: '100000000'}})

      const submit = screen.getByRole('button', {name: 'Submit'})
  
      fireEvent.click(submit)

      // Check that name input is invalid and volume input field is valid
      const nameInput = screen.getByRole('textbox')
      
      expect(nameInput).toBeInvalid()
      expect(volumeInput).toBeValid()

      // Cḩeck that there is only 1 error that gets announced
      const alerts = screen.getAllByRole('alert')

      expect(alerts.length).toBe(1)
      expect(alerts[0]).toHaveTextContent('This field is required')
    })
    
    it('logs to the console when form validation passes successfully', () => {
      const logSpy = jest.spyOn(console, 'log')

      const nameInput = screen.getByRole('textbox')
      fireEvent.change(nameInput, {target: {value: 'Test App'}})

      const volumeInput = screen.getByRole('spinbutton')
      fireEvent.change(volumeInput, {target: {value: '100000000'}})


      const submit = screen.getByRole('button', {name: 'Submit'})

      fireEvent.click(submit)

      // Check that both name and volume inputs are valid
      expect(nameInput).toBeValid()
      expect(volumeInput).toBeValid()

      // Cḩeck that there is only 1 error that gets announced
      const alerts = screen.queryAllByRole('alert')

      expect(alerts.length).toBe(0)
      
      expect(logSpy).toHaveBeenCalledWith('Test App', '100000000')
    })
  })
})
