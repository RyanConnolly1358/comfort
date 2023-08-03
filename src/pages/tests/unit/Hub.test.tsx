import React from 'react';
import { render, screen } from '@testing-library/react';
import Hub from '../../Hub';

test('page should have a title of Comfort', async () => {
    render(<Hub />);
    await screen.findByText('Comfort - Welcome user!');
    
});

test('page should render all buttons', async () => {
    render(<Hub />);
    expect(screen.getByTitle("dailyMoodButton")).toBeInTheDocument();
    expect(screen.getByTitle("emailCarerButton")).toBeInTheDocument();
    expect(screen.getByTitle("textToSpeechButton")).toBeInTheDocument();
    expect(screen.getByTitle("emergencyAlertButton")).toBeInTheDocument();
});