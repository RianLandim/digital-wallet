import { Launch, LaunchType } from './launch';

describe('Launch entity', () => {
  it('should create a launch entity with valid values', () => {
    const props = {
<<<<<<< HEAD
      value: 10,
      type: LaunchType.CREDIT,
      userId: 'test-userId',
=======
      value: '10',
      type: LaunchType.CREDIT,
>>>>>>> develop
    };

    const launch = new Launch(props);

    expect(launch).toBeInstanceOf(Launch);
    expect(launch.id).toBeTruthy();
    expect(launch.createdAt).toBeInstanceOf(Date);
<<<<<<< HEAD
    expect(launch.value).toEqual(10);
=======
    expect(launch.value).toEqual('10');
>>>>>>> develop
    expect(launch.type).toEqual(LaunchType.CREDIT);
  });

  it('should create a launch entity with default createdAt value', () => {
    const props = {
<<<<<<< HEAD
      value: 20,
      type: LaunchType.DEBIT,
      userId: 'test-userId',
=======
      value: '20',
      type: LaunchType.DEBIT,
>>>>>>> develop
    };

    const launch = new Launch(props);

    expect(launch).toBeInstanceOf(Launch);
    expect(launch.id).toBeTruthy();
    expect(launch.createdAt).toBeInstanceOf(Date);
<<<<<<< HEAD
    expect(launch.value).toEqual(20);
=======
    expect(launch.value).toEqual('20');
>>>>>>> develop
    expect(launch.type).toEqual(LaunchType.DEBIT);
  });

  it('should update value property of a launch entity', () => {
<<<<<<< HEAD
    const launch = new Launch({
      value: 30,
      type: LaunchType.CREDIT,
      userId: 'test-userId',
    });
=======
    const props = {
      value: '30',
      type: LaunchType.CREDIT,
    };

    const launch = new Launch(props);
>>>>>>> develop

    expect(launch.value).toEqual(30);

    launch.value = 40;

    expect(launch.value).toEqual(40);
  });

  it('should update createdAt property of a launch entity', () => {
<<<<<<< HEAD
    const launch = new Launch({
      value: 50,
      type: LaunchType.DEBIT,
      userId: 'test-userId',
    });
=======
    const props = {
      value: '50',
      type: LaunchType.DEBIT,
    };

    const launch = new Launch(props);
>>>>>>> develop

    expect(launch.createdAt).toBeInstanceOf(Date);

    const newDate = new Date('2022-01-01');
    launch.createdAt = newDate;

    expect(launch.createdAt).toEqual(newDate);
  });

  it('should update type property of a launch entity', () => {
<<<<<<< HEAD
    const launch = new Launch({
      value: 60,
      type: LaunchType.CREDIT,
      userId: 'test-userId',
    });
=======
    const props = {
      value: '60',
      type: LaunchType.CREDIT,
    };

    const launch = new Launch(props);
>>>>>>> develop

    expect(launch.type).toEqual(LaunchType.CREDIT);

    launch.type = LaunchType.DEBIT;

    expect(launch.type).toEqual(LaunchType.DEBIT);
  });
});
