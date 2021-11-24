import { proxyActivities } from '@temporalio/workflow';
// Only import the activity types
import type * as activities from './activities';

const { greet, getData } = proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
});

/** A workflow that simply calls an activity */
export async function example(name: string): Promise<string> {
  const t1 = await greet(name);
  const t2 = await greet(t1);
  const t3 = await getData(t2);
  return t1 + t2 + t3;
}
