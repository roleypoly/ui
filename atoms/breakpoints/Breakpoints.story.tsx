import * as React from 'react';
import { BreakpointDebugTool } from './DebugTool';
import { atomStories } from 'atoms/atoms.story';
import { withBreakpoints } from './Context';
import { BreakpointsProvider } from './BreakpointProvider';

const story = atomStories('Breakpoints', module);

story.addDecorator(story => <BreakpointsProvider>{story()}</BreakpointsProvider>);

story.add('Debug Tool', () => <BreakpointDebugTool />);
