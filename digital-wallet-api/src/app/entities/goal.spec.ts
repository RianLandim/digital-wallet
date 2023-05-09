import { Goal } from './goal';

describe('Goal entity', () => {
  it('should be able to create an goal', () => {
    const goal = new Goal({
      description: 'description-test',
      value: 1000,
      limitDate: new Date(),
      title: 'title-test',
    });

    expect(goal).toBeInstanceOf(Goal);
  });
});
