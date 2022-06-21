import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {dialogsData, messagesData, postsData} from "./index";

test('renders learn react link', () => {
  render(<App posts={postsData} dialogs={dialogsData} messages={messagesData}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
