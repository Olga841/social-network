import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {postsData} from "./index";

test('renders learn react link', () => {
  render(<App posts={postsData}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
