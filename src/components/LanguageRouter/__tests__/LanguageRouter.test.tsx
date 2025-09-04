import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LanguageRouter from '../index';

// Mock react-i18next
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    i18n: {
      changeLanguage: jest.fn(),
      language: 'en'
    }
  })
}));

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    replace: jest.fn()
  }),
  useLocation: () => ({
    pathname: '/'
  })
}));

describe('LanguageRouter', () => {
  it('should render without crashing', () => {
    render(
      <MemoryRouter>
        <LanguageRouter>
          <div>Test content</div>
        </LanguageRouter>
      </MemoryRouter>
    );
  });

  it('should render children', () => {
    const { getByText } = render(
      <MemoryRouter>
        <LanguageRouter>
          <div>Test content</div>
        </LanguageRouter>
      </MemoryRouter>
    );
    expect(getByText('Test content')).toBeInTheDocument();
  });
});