import axios from 'axios';

export async function greet(name: string): Promise<string> {
  return `Hello, ${name}!`;
}

export async function getData(name: string): Promise<string> {
  const res = await axios('https://google.com') as any;
  return `Hello, ${name}! ${res.data}`;
}
