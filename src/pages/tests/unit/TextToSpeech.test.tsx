import React from 'react';
import { render, screen } from '@testing-library/react';
import TextToSpeech from '../../TextToSpeech';

test('page should have a title', async () => {
    render(<TextToSpeech />);
    
    expect(screen.getByTitle('speakTitle')).toBeInTheDocument();
});

test('page should have a speak button', async () => {
    render(<TextToSpeech />);
    
    expect(screen.getByTitle('speakButton')).toBeInTheDocument();
});