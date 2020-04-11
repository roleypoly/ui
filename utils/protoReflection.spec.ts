import { DiscordUser } from '@roleypoly/rpc/shared';
import { user } from 'hack/fixtures/storyData';
import { AsObjectToProto } from './protoReflection';

it('converts a RoleypolyUser.AsObject back to protobuf', () => {
    const proto = AsObjectToProto(DiscordUser, user);

    expect(proto.toObject()).toMatchObject(user);
});
