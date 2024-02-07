import axios from "axios";

function httpClient(baseURL) {
  const baseClient = axios.create({
    baseURL,
    timeout: 10000,
  });
  baseClient.interceptors.request.use(async (request) => {
    const auth = await JSON.parse(localStorage.getItem("auth"));
    let accessToken = auth?.user.accessToken;
    accessToken = "";
    return {
      ...request,
      headers: {
        ...request.headers,
        ...(accessToken ? { Authorization: `bearer ${accessToken}` } : {}),
      },
    };
  });

  return baseClient;
}

export const client = httpClient("http://localhost:3000");
