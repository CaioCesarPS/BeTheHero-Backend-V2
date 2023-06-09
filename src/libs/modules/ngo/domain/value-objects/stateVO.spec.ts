import { StateVO } from './stateVO';

describe('stateVO', () => {
  it('should create a valid state', () => {
    const state = new StateVO('SP');
    expect(state.value).toBe('SP');
    expect(state).toBeInstanceOf(StateVO);
  });

  it('should throw a error if state is invalid', () => {
    expect(() => new StateVO('')).toThrowError('State is required');
  });

  it('should throw a error if the state is less than 2 characters', () => {
    expect(() => new StateVO('S')).toThrowError(
      'State must be at least 2 characters long',
    );
  });

  it('should throw a error if the state is more than 2 characters', () => {
    expect(() => new StateVO('SP1')).toThrowError(
      'State must be at most 2 characters long',
    );
  });
});
