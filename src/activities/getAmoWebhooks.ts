import axios from 'axios';

//const Pipeline = resource(`${baseUrl}/api/v4/leads/pipelines`, axios);
// const Lead = resource(`${baseUrl}/api/v4/leads`, {
//  getLeadById: (leadId) => axios.get(`${baseUrl}/api/v4/leads/${leadId}`),
// }, axios);
//const Lead = resource(`https://webhook.site/54554416-c6d7-4f16-a9eb-239a8ed75011`, axios);

export async function getAmoWebhooks(domain: string, accessToken: string): Promise<string> {
    axios.interceptors.request.use(async (config: any) => {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
      return config;
    });

    const request1 =  await axios.get(`https://${domain}/api/v2/webhooks`) as any;
    const webhooks = request1.data;
    return webhooks;
}
