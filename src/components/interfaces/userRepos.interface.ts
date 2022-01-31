export interface DataPropsRepos {
	items: NewObjectProps[]
}

export interface NewObjectProps {
	id: number,
	name: string,
	forks: number,
	stargazers_count: number
}