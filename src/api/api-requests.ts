import axios                                  from 'axios';
import { destructRepos, destructUserProfile } from './destructuring';


const instance = axios.create({
	baseURL: 'https://api.github.com/',
	headers: {
		'Authorization': 'YOUR-TOKEN',
		'Accept': 'application/vnd.github.v3+json'
	}
});

//  fetch users =======================
export const fetchUsers = async (userName: string): Promise<any> => {
	const resp = await instance.get<any>(`search/users?sort&q=${ userName }&page=1&per_page=10`)
		.catch(e => {
			console.log(e);
			return e;
		});

	const { items }: { items: Array<{ login: string }> } = resp.data;

	return Promise.all(items.map(({ login }) => {
		return fetchUserProfile(login);
	}));
};


// fetch user profile =================
const fetchUserProfile = async (userName: string) => {
	const resp = await instance.get<any>(`users/${ userName }`)
		.catch(e => {
			console.log(e);
			return e;
		});
	const { data } = resp;

	return destructUserProfile(data);
};


//  search user repos ====================
export const searchUserRepos = async (repoName: string, userName?: string) => {
	const resp = await instance.get<any>(`search/repositories?q=${ repoName }in:name+user:${ userName }&page=1&per_page=10`)
		.catch(e => {
			console.log(e);
			return e;
		});
	const { data } = resp;

	return destructRepos(data);
};