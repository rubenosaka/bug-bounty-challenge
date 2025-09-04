import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../index';

// Mock simple que devuelve los datos correctos
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, options?: any) => {
      if (key === 'home.welcome') return 'Welcome!';
      if (key === 'home.sidenote') return 'Test sidenote';
      if (key === 'home.intro') return 'Test intro with <b>known</b> issues:';
      if (key === 'home.issues' && options?.returnObjects) {
        return [
          {
            id: 'test-issue-1',
            icon: '🐞',
            title: 'Test Issue 1',
            description: 'Test description 1'
          },
          {
            id: 'test-issue-2',
            icon: '⭐️',
            title: 'Test Issue 2',
            description: 'Test description 2'
          }
        ];
      }
      return key;
    },
    i18n: {
      language: 'en',
      changeLanguage: jest.fn()
    }
  }),
  Trans: ({ i18nKey }: any) => {
    if (i18nKey === 'home.intro') {
      return <span>Test intro with <b>known</b> issues:</span>;
    }
    return <span>{i18nKey}</span>;
  }
}));

describe('Home Component', () => {
  it('should render without crashing', () => {
    render(<Home />);
    
    // Verificar que el componente se renderiza sin errores
    expect(screen.getByText('Welcome!')).toBeInTheDocument();
  });

  it('should render welcome message', () => {
    render(<Home />);
    
    expect(screen.getByText('Welcome!')).toBeInTheDocument();
  });

  it('should render intro text', () => {
    render(<Home />);
    
    expect(screen.getByText(/Test intro with/)).toBeInTheDocument();
  });

  it('should render sidenote', () => {
    render(<Home />);
    
    expect(screen.getByText('Test sidenote')).toBeInTheDocument();
  });

  it('should render issues list', () => {
    render(<Home />);
    
    // Verificar que se renderizan los issues del mock
    expect(screen.getByText('Test Issue 1')).toBeInTheDocument();
    expect(screen.getByText('Test Issue 2')).toBeInTheDocument();
  });
});
