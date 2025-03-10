import { render } from '@testing-library/react';
import Home from '@/app/(home)/page';

test('Hero Section matches snapshot', () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});
