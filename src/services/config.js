import axios from 'axios'

export const http = axios.create({
    baseURL: 'http://connectplug.com.br/api/v2/'
})