import { palette } from 'atoms/colors';
import { Space } from 'atoms/space';
import { LargeText, LargeTitle } from 'atoms/typography';
import { DemoPicker } from 'molecules/demo-picker';
import * as React from 'react';
import {
    DemoSubtitle,
    HalfsiesContainer,
    HalfsiesItem,
    HeroCentering,
    HeroText,
    DemoAlignment,
} from './Landing.styled';
import { DemoDiscord } from 'molecules/demo-discord';

export const Landing = () => (
    <HeroCentering>
        <Space />
        <Space />
        <HeroText>
            <div>
                <LargeTitle>Discord roles for humans.</LargeTitle>
            </div>
            <div style={{ color: palette.taupe500 }}>
                <LargeText>Ditch the bot commands. It's&nbsp;2020.</LargeText>
            </div>
        </HeroText>
        <Space />
        <HalfsiesContainer>
            <HalfsiesItem>
                <DemoAlignment>
                    <DemoDiscord />
                </DemoAlignment>
                <DemoSubtitle>Why are you okay with antiques?</DemoSubtitle>
            </HalfsiesItem>
            <HalfsiesItem>
                <DemoAlignment>
                    <DemoPicker />
                </DemoAlignment>
                <DemoSubtitle>Just click or tap.</DemoSubtitle>
            </HalfsiesItem>
        </HalfsiesContainer>
    </HeroCentering>
);
