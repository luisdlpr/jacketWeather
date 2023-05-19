// Imports
import React from 'react';
import { render, screen } from '@testing-library/react';
import LocationInfo from '../components/LocationInfo.jsx';

describe('Content Test', () => {
  it('Basic Content', async () => {
    const mockLocationDetails = {
      key: 999,
      suburb: 'test suburb',
      city: 'test city'
    }

    render (
      <LocationInfo locationInfo={mockLocationDetails} />
    )

    expect(screen.getByText("test suburb, test city"))
      .toBeInTheDocument();
  });
});

