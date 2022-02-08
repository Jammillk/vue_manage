import axios from "axios";
import config from '../config/index'

const baseUrl = process.env.NODE_ENV === 'development' ?
    config.baseUrl.dev : config.baseUrl.pro;

class HttpRequest {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    getInsideConfig() {
        const config = {
            baseUrl: this.baseUrl,
            header: {}
        }
        return config
    }

    interceptor(instance) {
        // 发送请求前要做什么
        instance.interceptors.request.use(function (config) {
            return config
        }, function (error) {
            return Promise.reject(error)
        });
        // 对响应数据做点什么
        instance.interceptors.response.use(function (response) {
            console.log(response, 'response')
            return response
        }, function (error) {
            console.log(error, 'error')
            return Promise.reject(error)
        });
    }

    request(options) {
        const instance = axios.create()
        options = { ...this.getInsideConfig(), ...options}
        this.interceptor(instance)
        return instance(options)
    }
}

export default new HttpRequest(baseUrl)