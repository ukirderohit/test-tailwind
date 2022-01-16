import { render } from '@testing-library/react';

import DudiUi from './dudi-ui';

describe('DudiUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DudiUi />);
    expect(baseElement).toBeTruthy();
  });
});
