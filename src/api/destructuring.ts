import { DataPropsRepos, CurrentReposProps, UserProfileProps } from '../components/interfaces';


export const destructUserProfile = ((object: UserProfileProps): UserProfileProps | undefined => {

	if ( object ) {
		const newObject = {
			id: object.id,
			name: object.name,
			email: object.email,
			login: object.login,
			avatar_url: object.avatar_url,
			public_repos: object.public_repos,
			location: object.location,
			created_at: object.created_at,
			followers: object.followers,
			following: object.following
		};
		return newObject;
	}
});


export const destructRepos = (({ items }: DataPropsRepos): CurrentReposProps[] => {
	const arr: Array<CurrentReposProps> = [];

	items.map((item: CurrentReposProps) => {
		const newObject = {
			id: item.id,
			name: item.name,
			forks: item.forks,
			stargazers_count: item.stargazers_count
		};
		arr.push(newObject);
	});
	return arr;
});