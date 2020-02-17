import * as React from 'react';
import { atomStories } from 'atoms/atoms.story';
import { number } from '@storybook/addon-knobs';
import { Hero } from './Hero';

const story = atomStories('Hero', module);

story.add('Hero', () => {
    const topSpacing = number('Top spacing', 75, { range: true, min: 0, max: 3000 });
    const bottomSpacing = number('Bottom spacing', 45, {
        range: true,
        min: 0,
        max: 3000,
    });

    return (
        <StoryWrapper topSpacing={topSpacing} bottomSpacing={bottomSpacing}>
            <Hero topSpacing={topSpacing} bottomSpacing={bottomSpacing}>
                <h1>This is it.</h1>
            </Hero>
        </StoryWrapper>
    );
});

type WrapperProps = {
    children: React.ReactNode;
    topSpacing: number;
    bottomSpacing: number;
};

const StoryWrapper = ({ topSpacing, bottomSpacing, ...props }: WrapperProps) => (
    <div>
        <div
            style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                height: '100vh',
            }}
        >
            <div
                style={{
                    height: topSpacing,
                    backgroundColor: 'rgba(255,0,0,0.25)',
                    top: 0,
                    left: 0,
                    right: 0,
                    position: 'absolute',
                    overflow: 'hidden',
                }}
            >
                topSpacing
            </div>
            <div
                style={{
                    height: bottomSpacing,
                    backgroundColor: 'rgba(0,0,255,0.25)',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    position: 'absolute',
                    overflow: 'hidden',
                }}
            >
                bottomSpacing
            </div>
        </div>
        {props.children}
    </div>
);
