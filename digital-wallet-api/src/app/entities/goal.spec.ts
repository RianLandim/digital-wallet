import { makeGoal } from '@test/factories/make-goal-factory';
import { Goal } from './goal';

describe('Goal entity', () => {
  it('should be able to create an goal', () => {
    const goal = new Goal(makeGoal());

    expect(goal).toBeInstanceOf(Goal);
  });
});
