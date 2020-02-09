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
} from './Landing.styled';
import { DemoDiscord } from 'molecules/demo-discord';

export const Landing = () => (
    <HeroCentering>
        <HeroText>
            <div>
                <LargeTitle>Tame your Discord&nbsp;roles.</LargeTitle>
            </div>
            <div style={{ color: palette.taupe500 }}>
                <LargeText>Ditch the bot commands. It's&nbsp;2020.</LargeText>
            </div>
        </HeroText>
        <Space></Space>
        <HalfsiesContainer>
            <HalfsiesItem>
                <DemoDiscord />
                <DemoSubtitle>Why are you okay with antiques?</DemoSubtitle>
            </HalfsiesItem>
            <HalfsiesItem>
                <DemoPicker />
                <DemoSubtitle>Just click or tap.</DemoSubtitle>
            </HalfsiesItem>
        </HalfsiesContainer>
    </HeroCentering>
);
