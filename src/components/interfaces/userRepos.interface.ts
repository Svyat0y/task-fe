export interface DataPropsRepos {
	items: CurrentReposProps[]
}

export interface CurrentReposProps {
	id: number,
	name: string,
	forks: number,
	stargazers_count: number
}