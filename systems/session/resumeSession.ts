import { NextPageContext } from 'next';
import { setCookie, parseCookies } from 'nookies';

type Session = {
    href: string;
    extra?: { [x: string]: any };
};

const STASHED_SESSION_KEY = 'stashed-session';

export const stashSession = (
    ctx: NextPageContext | undefined,
    extra?: Session['extra']
) => {
    const session: Session = {
        href: location.href,
        extra,
    };

    setCookie(ctx, STASHED_SESSION_KEY, JSON.stringify(session), { expires: 60 * 15 });
};

export const unstashSession = (
    ctx: NextPageContext | undefined,
    defaultHref: string
): Session => {
    const { [STASHED_SESSION_KEY]: sessionStr } = parseCookies(ctx);

    if (!sessionStr) {
        return { href: defaultHref };
    }

    const session: Session = JSON.parse(sessionStr);

    return session;
};

export const restoreSession = (ctx: NextPageContext | undefined, session: Session) => {
    const url = new URL(session.href);

    Object.values(session.extra || {}).forEach(([key, val]) =>
        url.searchParams.set(key, val)
    );

    if (!ctx?.req) {
        location.href = url.toString();
        return;
    }

    ctx.res?.writeHead(303, { Location: url.toString() });
};
