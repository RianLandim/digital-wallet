import { randomUUID } from 'crypto';
import { Launch, LaunchType } from './launch';

describe('Launch entity', () => {
  it('should create a launch entity with valid values', () => {
    const props = {
      value: '10',
      type: LaunchType.credit,
    };

    const launch = new Launch(props);

    expect(launch).toBeInstanceOf(Launch);
    expect(launch.id).toBeTruthy();
    expect(launch.createdAt).toBeInstanceOf(Date);
    expect(launch.value).toEqual('10');
    expect(launch.type).toEqual(LaunchType.credit);
  });

  it('should create a launch entity with default createdAt value', () => {
    const props = {
      value: '20',
      type: LaunchType.debit,
    };

    const launch = new Launch(props);

    expect(launch).toBeInstanceOf(Launch);
    expect(launch.id).toBeTruthy();
    expect(launch.createdAt).toBeInstanceOf(Date);
    expect(launch.value).toEqual('20');
    expect(launch.type).toEqual(LaunchType.debit);
  });

  it('should update value property of a launch entity', () => {
    const props = {
      value: '30',
      type: LaunchType.credit,
    };

    const launch = new Launch(props);

    expect(launch.value).toEqual('30');

    launch.value = '40';

    expect(launch.value).toEqual('40');
  });

  it('should update createdAt property of a launch entity', () => {
    const props = {
      value: '50',
      type: LaunchType.debit,
    };

    const launch = new Launch(props);

    expect(launch.createdAt).toBeInstanceOf(Date);

    const newDate = new Date('2022-01-01');
    launch.createdAt = newDate;

    expect(launch.createdAt).toEqual(newDate);
  });

  it('should update type property of a launch entity', () => {
    const props = {
      value: '60',
      type: LaunchType.credit,
    };

    const launch = new Launch(props);

    expect(launch.type).toEqual(LaunchType.credit);

    launch.type = LaunchType.debit;

    expect(launch.type).toEqual(LaunchType.debit);
  });
});
