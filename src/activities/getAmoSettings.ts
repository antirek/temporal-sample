import axios from 'axios';

export async function getAmoSettings(accountId: string): Promise<string> {
    const baseUrl = 'http://app10.mobilon.ru:3213';
    const request1 =  await axios.get(`${baseUrl}/integrations?accountId=${accountId}`) as any;
    const connections = request1.data;
    const conn = connections[0];
    const connId = conn.id;
    console.log('connId', connId);
    const request2 =  await axios.get(`${baseUrl}/integrations/${connId}/auth`) as any;
    return request2.data;
}