import * as React from 'react';
import { Base, Timestamp, TextParts, Username } from './DemoDiscord.styled';

export const DemoDiscord = () => {
    const time = new Date();
    const timeString = time.toTimeString();

    const [easterEggCount, setEasterEggCount] = React.useState(0);

    return (
        <Base>
            <Timestamp>
                {time.getHours() % 12}:{timeString.slice(3, 5)}{' '}
                {time.getHours() <= 12 ? 'AM' : 'PM'}
            </Timestamp>
            <Username onClick={() => setEasterEggCount(easterEggCount + 1)}>
                okano&nbsp;cat
            </Username>
            <TextParts>
                {easterEggCount >= 15
                    ? `NYAAAAAAA${'A'.repeat(easterEggCount - 15)}`
                    : easterEggCount >= 11
                    ? `I'm.. I'm gonna...`
                    : easterEggCount >= 10
                    ? `S-senpai... Be careful...`
                    : easterEggCount >= 5
                    ? `Take me out to dinner first, gosh...`
                    : `Hey, I'd like some roles!`}
            </TextParts>
            {/* input */}
        </Base>
    );
};
