import axios from "axios";
import { UserInterface } from "../interfaces";

const endpoint = "http://51.20.185.34:4000/api/users"; // could consider .env in bigger apps

export const GET = async () => {
  const response = await axios.get(endpoint);
  return response.data;
};

export const POST = async (data: UserInterface) => {
  const response = await axios.post(endpoint, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};
