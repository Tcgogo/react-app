import qs from "qs";
import * as auth from "../auth-provider";

interface Config extends RequestInit {
  token?: string;
  data?: object;
}

export const http = async (
  api: string,
  { data, token, headers, ...customConfig }: Config
) => {
  const config: Config = {
    method: "get",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "ConteFnt-Type": data ? "application/json" : "",
    },
    ...customConfig,
  };

  if (config.method?.toLocaleUpperCase() === "GET") {
    api += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }

  return window.fetch(api, config).then(async (response) => {
    if (response.status === 401) {
      auth.logout();
      window.location.reload();
      return Promise.reject({
        message: "请重新登录",
      });
    }

    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
};
