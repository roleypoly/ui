import * as React from 'react';
import { HalfsiesContainer, HalfsiesItem } from 'atoms/halfsies';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { DiscordBase, DiscordRole } from './WhyNoRoles.styled';
import { demoData } from 'hack/fixtures/demoData';
import { Role } from '@roleypoly/rpc/shared';
import { palette } from 'atoms/colors';
import chroma from 'chroma-js';

const adminRoles: Role.AsObject[] = [
    {
        id: 'roley2',
        name: 'Admin',
        permissions: 0,
        color: chroma('hotpink').num(),
        position: -1,
        managed: true,
        safety: 0,
    },
    {
        id: 'roley3',
        name: 'Moderator',
        permissions: 0,
        color: chroma('lime').num(),
        position: -1,
        managed: true,
        safety: 0,
    },
];

const roleypolyRole: Role.AsObject = {
    id: 'roley',
    name: 'Roleypoly',
    permissions: 0,
    color: chroma(palette.taupe500).num(),
    position: -1,
    managed: true,
    safety: 0,
};

const goodRoles = [...adminRoles, roleypolyRole, ...demoData];

const badRoles = [...adminRoles, ...demoData, roleypolyRole];

const Example = (props: { roles: Role.AsObject[] }) => (
    <div>
        <DiscordBase>
            {props.roles.map((r) => (
                <DiscordRole discordRole={r} isRoleypoly={r.name === 'Roleypoly'}>
                    {r.name}
                </DiscordRole>
            ))}
        </DiscordBase>
    </div>
);

export const WhyNoRoles = () => (
    <HalfsiesContainer>
        <HalfsiesItem>
            <FaCheck /> Good
            <Example roles={goodRoles} />
        </HalfsiesItem>
        <HalfsiesItem>
            <FaTimes /> Baddd
            <Example roles={badRoles} />
        </HalfsiesItem>
    </HalfsiesContainer>
);
