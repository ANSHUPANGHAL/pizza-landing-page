
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Ensure Jest knows about extended matchers
import { Button } from '../button'; // Use relative path

describe('Button Component', () => {
  it('renders button correctly', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('has correct class names', () => {
    render(<Button className="bg-orange-500">Test Button</Button>);
    expect(screen.getByText('Test Button')).toHaveClass('bg-orange-500');
  });

  it('applies default variants', () => {
    render(<Button>Default Button</Button>);
    const button = screen.getByText('Default Button');
    expect(button).toHaveClass('bg-primary', 'text-primary-foreground');
  });

  it('renders with the correct size', () => {
    render(<Button size="lg">Large Button</Button>);
    const button = screen.getByText('Large Button');
    expect(button).toHaveClass('h-11', 'rounded-md', 'px-8');
  });
});
