import React from 'react';
import { render, screen } from '@testing-library/react';
import AdminHub from '../../AdminHub';

test('page should have a title of Comfort - Welcome admin!', async () => {
    render(<AdminHub />);
    await screen.findByText('Comfort - Welcome admin!');
    
  });