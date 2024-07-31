import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../config';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchData = async (url: string): Promise<AxiosResponse<any>> => {
  return await axiosInstance.get(url);
};

export function formatDate(dateString:string) {
  const date = new Date(dateString);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}