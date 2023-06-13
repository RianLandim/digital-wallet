import { Launch, LaunchType } from '@application/entities/launch';

type Override = Partial<Launch>;

export function makeLaunch(override: Override = {}) {
  return new Launch(
    {
      userId: 'test-userId',
      value: 1000,
      type: LaunchType.CREDIT,
      createdAt: new Date(),
      title: 'title-test',
      category: 'category-test',
      ...override,
    },
    override?.id,
  );
}
