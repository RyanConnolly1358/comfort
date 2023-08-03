import React from 'react';
import { render, screen } from '@testing-library/react';
import AdminEditEmergencyContacts from '../../AdminEditEmergencyContacts';

test('page should have a title of Edit Emergency Contacts', async () => {
    render(<AdminEditEmergencyContacts />);
    await screen.findByText('Edit Emergency Contacts');
    //expect(screen.getByTitle("updatePrimaryTitle")).toBeInTheDocument()
  });