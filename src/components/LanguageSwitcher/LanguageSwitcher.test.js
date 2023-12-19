import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LanguageSwitcher from './LanguageSwitcher';

describe('<LanguageSwitcher />', () => {
  test('it should mount', () => {
    render(<LanguageSwitcher />);
    
    const languageSwitcher = screen.getByTestId('LanguageSwitcher');

    expect(languageSwitcher).toBeInTheDocument();
  });
});