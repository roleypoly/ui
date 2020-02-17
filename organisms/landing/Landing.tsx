import { palette } from 'atoms/colors';
import { Space } from 'atoms/space';
import { LargeText, LargeTitle } from 'atoms/typography';
import { DemoDiscord } from 'molecules/demo-discord';
import { DemoPicker } from 'molecules/demo-picker';
import * as React from 'react';
import {
    DemoAlignment,
    DemoSubtitle,
    HalfsiesContainer,
    HalfsiesItem,
    HeroCentering,
    HeroText,
} from './Landing.styled';

export const Landing = () => (
    <HeroCentering>
        <HeroText>
            <div>
                <LargeTitle>Discord roles for humans.</LargeTitle>
            </div>
            <div style={{ color: palette.taupe500 }}>
                <LargeText>
                    Ditch the bot commands. It's&nbsp;{new Date().getFullYear()}.
                </LargeText>
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
