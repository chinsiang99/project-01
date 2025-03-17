import { render, screen, waitFor } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  it('renders initial UI correctly', () => {
    render(<App />)

    // Check if the "TailwindCSS" text is rendered
    expect(screen.getByText(/TailwindCSS being applied here/i)).toBeInTheDocument()

    // Check if the Message component is rendered
    expect(screen.getByText(/user message/i)).toBeInTheDocument()
  })

  it('updates username and message after 5 seconds', async () => {
    render(<App />)

    // Initially check the message and username
    expect(screen.getByText(/user message/i)).toBeInTheDocument()

    // Simulate waiting for 5 seconds (without mocking timers)
    await waitFor(() => {
        // console.log(screen.debug()); // Logs the DOM to see the current state
        expect(screen.getByText(/updated message/i)).toBeInTheDocument();
    }, { timeout: 6000 })
    
    // Check if the username updated after the timeout
    expect(screen.getByText(/updated username/i)).toBeInTheDocument()
  })
})
