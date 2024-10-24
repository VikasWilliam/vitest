// src/components/ParentComponent.test.tsx
import { render, screen } from '@testing-library/react';
import ParentComponent from './ParentComponent';
import { describe, it, expect } from 'vitest';

describe('ParentComponent', () => {
  it('renders ParentComponent and passes props to ChildComponent', () => {
    render(<ParentComponent />);
    
    // Check if ParentComponent renders correctly
    expect(screen.getByText('Parent Component')).toBeInTheDocument();
    screen.debug();

    // Check if ChildComponent renders and displays correct data
   expect(screen.getByText(/Name:\s*John Doe/i)).toBeInTheDocument();
   expect(screen.getByText(/Age:\s*30/i)).toBeInTheDocument();
   expect(screen.getByText(/Occupation:\s*Software Engineer/i)).toBeInTheDocument();
  });
});
