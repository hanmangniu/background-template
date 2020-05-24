import axios from "axios";
import { serverHost } from "../config/apiUrl";

const env = process.env.NODE_ENV;

axios.defaults.timeout = 5000;

// axios.defaults.baseURL = serverHost
if (env == "production") {
  axios.defaults.baseURL = serverHost;
} else {
  axios.defaults.baseURL = "/api";
}

//http request 拦截器
axios.interceptors.request.use(
  (config) => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    config.data = JSON.stringify(config.data);
    config.headers = {
      // 'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'
      "Content-Type": "application/json;charset=utf-8",
    };
    // if(token){
    //   config.params = {'token':token}
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//http response 拦截器
axios.interceptors.response.use(
  (response) => {
    if (response.data.errCode == 2) {
      // this.$router.push({
      //   path:"/login",
      //   querry:{redirect:this.$router.currentRoute.fullPath}//从哪个页面跳转
      // })
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url: string, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url: string, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url: string, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url: string, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
}
