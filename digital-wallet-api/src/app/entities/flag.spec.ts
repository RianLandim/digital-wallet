import { Flag } from './flag';

describe('', () => {
  it('should be able to create an flag entity', () => {
    const flag = new Flag({ image: 'image text', name: 'name-test' });

    expect(flag).toBeInstanceOf(Flag);
  });
});
