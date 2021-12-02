import axios from 'axios';


//const Pipeline = resource(`${baseUrl}/api/v4/leads/pipelines`, axios);
// const Lead = resource(`${baseUrl}/api/v4/leads`, {
//  getLeadById: (leadId) => axios.get(`${baseUrl}/api/v4/leads/${leadId}`),
// }, axios);
//const Lead = resource(`https://webhook.site/54554416-c6d7-4f16-a9eb-239a8ed75011`, axios);


export async function getAmoPipelines(domain: string, accessToken: string): Promise<string> {

    axios.interceptors.request.use(async (config: any) => {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
      return config;
    });
      
    const request1 =  await axios.get(`https://${domain}/api/v4/leads/pipelines`) as any;
    const pipelines = request1.data;
    return pipelines;
}

