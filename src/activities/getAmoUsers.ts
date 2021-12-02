import axios from 'axios';

export async function getAmoUsers(domain: string, accessToken: string): Promise<string> {
    axios.interceptors.request.use(async (config: any) => {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
      return config;
    });

    const request1 =  await axios.get(`https://${domain}/api/v4/users`) as any;
    const users = request1.data;
    return users;
}

