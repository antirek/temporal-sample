import { proxyActivities, sleep } from '@temporalio/workflow';
// Only import the activity types
import type * as activities from './activities';

const { prepareGreeting, sendEmail, getRegion, 
  getAmoSettings, getAmoPipelines, getAmoWebhooks,
  getAmoUsers } = proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
});

/** A workflow that simply calls an activity */
export async function example(accountId: string): Promise<string> {
  // const t1 = await prepareGreeting(name);
  // const t2 = await getRegion('79135292926');

  const amoSettings: any = await getAmoSettings(accountId);
  const {accessToken, domain} = amoSettings;
  
  const t3 = await getAmoPipelines(domain, accessToken);
  await sleep('1 minutes');
  const t4 = await getAmoWebhooks(domain, accessToken);
  await sleep('5 minutes');
  const t5 = await getAmoUsers(domain, accessToken);
    
  // await sendEmail(['serge.dmitriev@gmail.com'], 'message', t1 + '------' + JSON.stringify(t2));
  return t3;
}