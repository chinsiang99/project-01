import { describe, it, expect } from 'vitest';
import { useContext } from 'react';
import { render } from "@testing-library/react";
import { UserContext } from './UserContext';

// Create a test component to use the context
const TestComponent = () => {
  const context = useContext(UserContext);

  if (!context) {
    return <div>No context provided</div>;
  }

  return (
    <div>
      <p>Name: {context.name}</p>
      <p>Message: {context.message}</p>
    </div>
  );
};

describe('UserContext', () => {
  it('should render the context values when provided', () => {
    const mockValue = { name: 'John Doe', message: 'Hello, world!' };

    // Render the test component wrapped with the context provider
    const { getByText } = render(
      <UserContext.Provider value={mockValue}>
        <TestComponent />
      </UserContext.Provider>
    );

    // Assert that the values from the context are rendered
    expect(getByText('Name: John Doe')).toBeTruthy();
    expect(getByText('Message: Hello, world!')).toBeTruthy();
  });

  it('should render "No context provided" when no provider is used', () => {
    const { getByText } = render(<TestComponent />);

    // Assert that fallback rendering happens
    expect(getByText('No context provided')).toBeTruthy();
  });
});