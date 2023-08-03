import React from 'react';
import { render, screen } from '@testing-library/react';
import AdminUpdatePrimaryCarer from '../../AdminUpdatePrimaryCarer';

test('page should have a title of Update Primary Carer', async () => {
    render(<AdminUpdatePrimaryCarer />);
    expect(screen.getByTitle("updatePrimaryTitle")).toBeInTheDocument()
  });