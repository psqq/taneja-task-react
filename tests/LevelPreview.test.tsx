import * as React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import LevelPreview from '../src/components/LevelPreview';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('LevelPreview simple tests', () => {
    const { queryAllByText } = render(
        <LevelPreview from={1} to={10} />,
    );

    expect(queryAllByText(/1/).length).toBeTruthy();
    expect(queryAllByText(/10/).length).toBeTruthy();
    expect(queryAllByText(/5/).length).toBeFalsy();
});
