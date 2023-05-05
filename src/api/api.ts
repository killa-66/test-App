// const baseUrl = "http://localhost:3001";
// import axios from "axios";
// export const api = {
//   getTrains: async (): Promise<any[]> => {
//     try {
//       const response = await axios.get(`${baseUrl}/trains`);
//       if (response.status === 200 && Array.isArray(response.data)) {
//         return response.data;
//       } else {
//         console.error('Ошибка при получении данных с сервера:', response);
//         return [];
//       }
//     } catch (error) {
//       console.error('Ошибка при выполнении запроса:', error);
//       return [];
//     }
//   // getOneTrain: async (id: number) => {
//   //   const response = await fetch(`${baseUrl}/trains/${id}`)
//   //   const data = await response.json();
//   //   return data;
//   // }
// }
// }

// import axios from 'axios';
// import { Train } from '../components/types';

// const API_URL = 'http://localhost:3001';

// export async function getTrains() {
//   try {
//     const response = await axios.get<Train>(`${API_URL}/db`);
//   // @ts-ignore
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Ошибка при выполнении запроса:', error);
//     throw error;
//   }
// }

