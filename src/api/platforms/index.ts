import { API } from "../api";
import { Platform } from "./types";

const BASE_URL = "/platforms";

export const getPlatforms = async () => {
  return {
    data: [
      {
        id: 1,
        name: "Netflix",
        url: "netflix.com"
      },
      {
        id: 2,
        name: "Amazon Prime",
        url: "primevideo.com"
      },
      {
        id: 3,
        name: "Disney+",
        url: "disneyplus.com"
      },
    ],
  };
  return API.get<Platform[]>(BASE_URL);
};
