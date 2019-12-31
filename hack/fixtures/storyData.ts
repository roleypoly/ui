import { Role, Guild } from '@roleypoly/rpc/shared';

export const roleCategory: Role.AsObject[] = [
  {
    id: 'aaa',
    permissions: 0,
    name: 'She/Her',
    color: 0xffc0cb,
    position: 1,
    managed: false,
  },
  {
    id: 'bbb',
    permissions: 0,
    name: 'He/Him',
    color: 0xc0ebff,
    position: 2,
    managed: false,
  },
  {
    id: 'ccc',
    permissions: 0,
    name: 'They/Them',
    color: 0xc0ffd5,
    position: 3,
    managed: false,
  },
  {
    id: 'ddd',
    permissions: 0,
    name: 'Reee',
    color: 0xff0000,
    position: 4,
    managed: false,
  },
  {
    id: 'eee',
    permissions: 0,
    name: 'black but actually bravely default',
    color: 0x000000,
    position: 5,
    managed: false,
  },
  {
    id: 'fff',
    permissions: 0,
    name: 'blackish',
    color: 0x1,
    position: 5,
    managed: false,
  },
];

export const roleWikiData = {
  aaa: 'Typically used by feminine-identifying people',
  bbb: 'Typically used by masculine-identifying people',
  ccc: 'Typically used to refer to all people as a singular neutral.',
};

export const guild: Guild.AsObject = {
  name: 'emoji megaporium',
  id: 'aaa',
  icon: '',
  ownerid: 'bbb',
  membercount: 23453,
  splash: '',
};
