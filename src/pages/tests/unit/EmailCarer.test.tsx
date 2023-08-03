import React from 'react';
import { render, screen } from '@testing-library/react';
import EmailCarer from '../../EmailCarer';

test('page should have a title of Email your carer!', async () => {
    render(<EmailCarer />);
    await screen.findByText('Email your carer!');
    
});

test('page should have a send email button', async () => {
    render(<EmailCarer />);
    expect(screen.getByTitle("sendEmailButton")).toBeInTheDocument();
    
    
});