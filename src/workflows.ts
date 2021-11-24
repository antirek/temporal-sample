import { proxyActivities } from '@temporalio/workflow';
// Only import the activity types
import type * as activities from './activities';

const { prepareGreeting, sendEmail, getRegion } = proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
});

/** A workflow that simply calls an activity */
export async function example(name: string, number: string): Promise<string> {
  const t1 = await prepareGreeting(name);
  const t2 = await getRegion(number)
  await sendEmail(['serge.dmitriev@gmail.com'], 'message', t1 + '------' + JSON.stringify(t2));
  return t1 + t2.toString();
}