import * as React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

export type ErrorMessage = {
    english: string | React.ReactNode;
    japanese?: string | React.ReactNode;
    friendlyCode?: string | React.ReactNode;
};

export const errorMessages: { [code: string]: ErrorMessage } = {
    default: {
        english: `Something went bad. How could this happen?`,
        japanese: `わかりません...`,
        friendlyCode: 'Oops.',
    },
    '400': {
        english: 'Your client sent me something weird...',
        japanese: '((((；゜Д゜)))',
    },
    '403': {
        english: `You weren't allowed to access this.`,
        japanese: 'あなたはこの点に合格しないかもしれません',
    },
    '404': {
        english: `This page is in another castle.`,
        japanese: 'お探しのページは見つかりませんでした',
    },
    '419': {
        english: 'Something went too slowly...',
        japanese: 'おやすみなさい〜',
    },
    '500': {
        english: `The server doesn't like you right now. Feed it a cookie.`,
        japanese: 'クッキーを送ってください〜  クッキーを送ってください〜',
    },
    serverFailure: {
        english: `Server is super unhappy with you today...`,
        japanese: 'クッキーを送ってください〜',
        friendlyCode: <FaExclamationTriangle />,
    },
    magicExpired: {
        english: 'That magic login link was expired.',
        friendlyCode: 'Woah.',
    },
};

export const getMessageFromCode = (code: keyof typeof errorMessages) => {
    const codeStr = String(code);

    return {
        ...errorMessages['default'],
        friendlyCode: errorMessages[codeStr].friendlyCode || code,
        ...(errorMessages[codeStr] || {}),
    };
};
