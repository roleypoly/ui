import { Role, Guild } from '@roleypoly/rpc/shared';
import { Category } from '@roleypoly/rpc/platform';

export const mockCategory: Category.AsObject = {
  id: 'aaa',
  name: 'Mock',
  rolesList: ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'unsafe1', 'unsafe2'],
  hidden: false,
  type: Category.CategoryType.MULTI,
  position: 0,
};

export const roleCategory: Role.AsObject[] = [
  {
    id: 'aaa',
    permissions: 0,
    name: 'She/Her',
    color: 0xffc0cb,
    position: 1,
    managed: false,
    safety: Role.RoleSafety.SAFE,
  },
  {
    id: 'bbb',
    permissions: 0,
    name: 'He/Him',
    color: 0xc0ebff,
    position: 2,
    managed: false,
    safety: Role.RoleSafety.SAFE,
  },
  {
    id: 'ccc',
    permissions: 0,
    name: 'They/Them',
    color: 0xc0ffd5,
    position: 3,
    managed: false,
    safety: Role.RoleSafety.SAFE,
  },
  {
    id: 'ddd',
    permissions: 0,
    name: 'Reee',
    color: 0xff0000,
    position: 4,
    managed: false,
    safety: Role.RoleSafety.SAFE,
  },
  {
    id: 'eee',
    permissions: 0,
    name: 'black but actually bravely default',
    color: 0x000000,
    position: 5,
    managed: false,
    safety: Role.RoleSafety.SAFE,
  },
  {
    id: 'fff',
    permissions: 0,
    name: 'b̻͌̆̽ͣ̃ͭ̊l͚̥͙̔ͨ̊aͥć͕k͎̟͍͕ͥ̋ͯ̓̈̉̋i͛̄̔͂̚̚҉̳͈͔̖̼̮ṣ̤̗̝͊̌͆h͈̭̰͔̥̯ͅ',
    color: 0x1,
    position: 6,
    managed: false,
    safety: Role.RoleSafety.SAFE,
  },
  {
    id: 'unsafe1',
    permissions: 0,
    name: 'too high',
    color: 0xff0088,
    position: 7,
    managed: false,
    safety: Role.RoleSafety.HIGHERTHANBOT,
  },
  {
    id: 'unsafe2',
    permissions: 0x00000008 | 0x10000000,
    name: 'too strong',
    color: 0x00ff88,
    position: 8,
    managed: false,
    safety: Role.RoleSafety.DANGEROUSPERMISSIONS,
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
