import React from 'react';
import { render, screen } from '@testing-library/react';
import Register from '../../Register';

test('page should have a title of Enter your details below!', async () => {
    render(<Register />);
    await screen.findByText('Enter your details below!');
    
  });