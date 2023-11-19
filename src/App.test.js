import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './App.js';

test('Test header', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const element = screen.queryByTestId("header-text");
  console.log(element.innerHTML);
  expect(element).toBeInTheDocument();
  expect(element.innerHTML).toEqual('Demyst Bank');
});

test('Test footer', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const element = screen.queryByTestId("footer");
  expect(element).toBeInTheDocument();
  expect(element.innerHTML).toEqual('© 2023 | Demyst');
});
