export interface UserProfileProps {
	id: number,
	name: string,
	email: string,
	login: string,
	avatar_url: string,
	public_repos: number,
	location: string,
	created_at: string,
	followers: number,
	following: number,
}

export interface UsersItemsProps {
	users?: UserProfileProps[],
	setCurrentProfile: (u: UserProfileProps) => void
}

export interface UserInfoProps {
	currentProfile?: UserProfileProps
}