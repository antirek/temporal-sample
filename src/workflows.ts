import { proxyActivities } from '@temporalio/workflow';
// Only import the activity types
import type * as activities from './activities';

const { prepareGreeting, sendEmail } = proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
});

/** A workflow that simply calls an activity */
export async function example(name: string): Promise<string> {
  const t1 = await prepareGreeting(name);  
  await sendEmail(['serge.dmitriev@gmail.com'], 'message', t1);
  return t1;
}