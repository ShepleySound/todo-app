import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SettingsContext, SettingsProvider } from '.';

describe('Settings Context', () => {
  test('Components can use initial context values', () => {
    render(
      <SettingsProvider>
        <SettingsContext.Consumer>
          {({userSettings}) => (
            <>
              <div data-testid='boolean-test'>{`${userSettings.showCompletedTasks}`}</div>
              <div data-testid='count-test'>{userSettings.itemsPerPage}</div>
              <div data-testid='string-test'>{userSettings.sortKeyword}</div>
            </>
          )}
        </SettingsContext.Consumer>
      </SettingsProvider>
    );
    expect(screen.getByTestId('boolean-test')).toHaveTextContent('false');
    expect(screen.getByTestId('count-test')).toHaveTextContent('5');
    expect(screen.getByTestId('string-test')).toHaveTextContent('difficulty');
  });
});
