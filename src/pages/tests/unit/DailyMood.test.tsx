import React from 'react';
import { render, screen } from '@testing-library/react';
import DailyMood from '../../DailyMood';

test('page should have a title of Daily Mood Check!', async () => {
    render(<DailyMood />);
    await screen.findByText('Daily Mood Check!');
    
});