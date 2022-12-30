import axios from 'axios';
import toast from 'react-hot-toast';

type TokenType = {
	token: string;
	exp: number;
};

let URL: string = 'http://localhost:9090';

const instance = axios.create({
	baseURL: URL,
});

instance.interceptors.request.use(async config => {
	if (config.data) {
		for (const key of Object.keys(config.data)) {
			if (config.data[key] === '') {
				delete config.data[key];
			}
		}
	}

	if (localStorage.getItem('auth_token')) {
		const userToken: TokenType = JSON.parse(localStorage.getItem('auth_token') || '');

		if (new Date(userToken.exp).getTime() > Date.now()) {
			config!.headers!.Authorization = `Bearer ${userToken.token}`;
		}
	}

	return config;
});

instance.interceptors.response.use(
	res => {
		if (res.data.message && res.status === 200) {
			toast.success(res.data.message);
		}
		return res;
	},
	error => {
		toast.error(error.response.data.message);
		return Promise.reject(error);
	},
);

export default instance;
