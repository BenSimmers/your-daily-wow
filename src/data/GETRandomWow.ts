import { Wow } from "../types";

export async function getRandomWow(url: string) {
  const cachedData = localStorage.getItem("wow");
  if (cachedData) {
    return JSON.parse(cachedData) as Wow;
  }
  const response = await fetch(url);
  const data = await response.json();
  localStorage.setItem("wow", JSON.stringify(data[0]));
  setTimeout(() => {
    localStorage.removeItem("wow");
  }
  , 1000 * 60 * 60 * 24);
  return data[0];
}
