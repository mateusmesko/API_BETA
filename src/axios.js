import axios from 'axios'


axios.defaults.baseURL= '';
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Device-ID'] = '00000000-0000-0000-0000-000000000050'