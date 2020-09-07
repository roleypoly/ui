import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withColors } from '../atoms/colors/withColors';
import { StoryApi } from '@storybook/addons';

interface Options {
    withInfo: boolean;
    beforeDecorators: OptionFunc;
    afterDecorators: OptionFunc;
}

type OptionFunc = (options: Partial<Options>, story: StoryApi<any>) => void;

export const makeFactory = (title: string, categoryOpts: Partial<Options> = {}) => (
    moduleName: string,
    nodeModule: NodeModule,
    storyOpts: Partial<Options> = {}
) => {
    const opts = {
        ...categoryOpts,
        ...storyOpts,
    };

    const builtStory = storiesOf(`${title}|${moduleName}`, nodeModule);

    opts.beforeDecorators && opts.beforeDecorators(opts, builtStory);

    builtStory.addDecorator(withColors);
    builtStory.addDecorator(withKnobs);

    opts.afterDecorators && opts.afterDecorators(opts, builtStory);
    return builtStory;
};
