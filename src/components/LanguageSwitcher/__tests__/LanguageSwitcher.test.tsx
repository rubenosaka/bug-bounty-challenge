import React from 'react';
import { render, screen } from '@testing-library/react';
import LanguageSwitcher from '../index';

// Mock react-i18next
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    i18n: {
      changeLanguage: jest.fn(),
      language: 'en'
    }
  })
}));

describe('LanguageSwitcher', () => {
  it('should render without crashing', () => {
    render(<LanguageSwitcher />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should display current language', () => {
    render(<LanguageSwitcher />);
    expect(screen.getByText('English')).toBeInTheDocument();
  });
});
