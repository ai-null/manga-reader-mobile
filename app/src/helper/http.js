import Axios from 'axios';
import {BASE_URL} from '../config';

const instance = Axios.create({baseURL: BASE_URL, timeout: 2500});
instance.defaults.timeout = 2500;

export default instance;
