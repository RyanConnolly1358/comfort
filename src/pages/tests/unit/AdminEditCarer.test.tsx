import React from 'react';
import { render, screen } from '@testing-library/react';
import AdminEditCarer from '../../AdminEditCarer';

test('page should have a title Edit Carer', async () => {
    render(<AdminEditCarer />);
    await screen.findByText('Edit Carer');
    
  });