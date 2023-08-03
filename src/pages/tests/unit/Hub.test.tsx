import React from 'react';
import { render, screen } from '@testing-library/react';
import Hub from '../../Hub';

test('page should have a title of Comfort', async () => {
    render(<Hub />);
    await screen.findByText('Comfort - Welcome user!');
    
});