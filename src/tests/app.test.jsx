import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

// simple test block using RTL and vitest

describe('App test', () => {
  test('Should render hero heading', () => {
    render(<App />);
    expect(screen.getByText(/Photo Gallery/i)).toBeDefined();
  });
});
