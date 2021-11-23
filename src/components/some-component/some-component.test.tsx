import { SomeComponent } from 'components/some-component'
import { render, screen } from '@testing-library/react'

describe('SomeComponent', () => {
  it('shows greeting with the specified name', () => {
    render(<SomeComponent name="Any" />)

    expect(screen.getByText(/hi any/i)).toBeInTheDocument()
  })
})
