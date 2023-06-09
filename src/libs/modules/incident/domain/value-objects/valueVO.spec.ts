import { ValueVO } from './valueVO';

describe('ValueVO', () => {
  it('should create a ValueVO', () => {
    const value = new ValueVO(1);
    expect(value).toBeInstanceOf(ValueVO);
  });
});
