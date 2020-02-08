import * as React from 'react';
import { platformClient } from 'contexts/withPlatform';
import { Avatar, utils } from 'atoms/avatar';
import { Guild, IDQuery } from '@roleypoly/rpc/shared';
import { NextPageContext } from 'next';
import Link from 'next/link';

export type Props = {
    currentServer?: Guild.AsObject;
};

export default function TestServerPage({ currentServer }: Props) {
    return (
        <div>
            {currentServer !== undefined ? (
                <>
                    <div>ID: {currentServer.id}</div>
                    <div>Name: {currentServer.name}</div>
                    <div>
                        <Avatar
                            size={64}
                            src={`https://cdn.discordapp.com/icons/${currentServer.id}/${currentServer.icon}.webp?size=256`}
                        >
                            {utils.initialsFromName(currentServer.name)}
                        </Avatar>
                    </div>
                </>
            ) : (
                <div>No Server.</div>
            )}
            <p>
                <Link href="/tests/s/[id]" as="/tests/s/203493697696956418">
                    <a>GMMfg</a>
                </Link>
            </p>
            <p>
                <Link href="/tests/s/[id]" as="/tests/s/386659935687147521">
                    <a>RP</a>
                </Link>
            </p>
        </div>
    );
}

TestServerPage.getInitialProps = async (ctx: NextPageContext): Promise<Props> => {
    const query = new IDQuery();
    query.setGuildid(ctx.query.id as string);
    const guild = await platformClient().getGuild(query);
    console.log('i did it here');
    return {
        currentServer: guild.toObject(),
    };
};
