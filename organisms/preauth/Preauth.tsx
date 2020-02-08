import { Guild } from '@roleypoly/rpc/shared';
import { Button } from 'atoms/button';
import { Space } from 'atoms/space';
import { PreauthGreeting } from 'molecules/preauth-greeting';
import { PreauthSecretCode } from 'molecules/preauth-secret-code';
import * as React from 'react';
import { FaDiscord } from 'react-icons/fa';
import styled from 'styled-components';

type PreauthProps = {
    guildSlug?: Guild.AsObject;
    onSendSecretCode: (code: string) => void;
};

const Centered = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    margin: 0 auto;
`;

const WidthContainer = styled.div`
    width: 20em;
    max-width: 100%;
`;

export const Preauth = (props: PreauthProps) => {
    return (
        <Centered>
            {props.guildSlug && <PreauthGreeting guildSlug={props.guildSlug} />}
            <WidthContainer>
                <Button
                    color="discord"
                    icon={
                        <div style={{ position: 'relative', top: 3 }}>
                            <FaDiscord />
                        </div>
                    }
                >
                    Sign in with Discord
                </Button>
            </WidthContainer>
            <Space />
            <WidthContainer>
                <p>
                    Or, send a message saying "login" to <b>roleypoly#3266</b>
                </p>
                <PreauthSecretCode onSubmit={props.onSendSecretCode} />
            </WidthContainer>
        </Centered>
    );
};
