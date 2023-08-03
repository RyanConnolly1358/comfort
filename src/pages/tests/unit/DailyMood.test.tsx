import React from 'react';
import { render, screen } from '@testing-library/react';
import DailyMood from '../../DailyMood';

test('page should have a title of Daily Mood Check!', async () => {
    render(<DailyMood />);
    await screen.findByText('Daily Mood Check!');
    
});

test('page should have a 5 mood images', async () => {
    render(<DailyMood />);
    expect(screen.getByTitle("moodRatingImg5")).toBeInTheDocument();
    expect(screen.getByTitle("moodRatingImg4")).toBeInTheDocument();
    expect(screen.getByTitle("moodRatingImg3")).toBeInTheDocument();
    expect(screen.getByTitle("moodRatingImg2")).toBeInTheDocument();
    expect(screen.getByTitle("moodRatingImg1")).toBeInTheDocument();
    
});