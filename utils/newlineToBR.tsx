import * as React from 'react';

export const newlineToBR = (text: string) => {
    const textArray = text.split('\n');
    return (
        <>
            {textArray.map(part => (
                <div>{part || <>&nbsp;</>}</div>
            ))}
        </>
    );
};
