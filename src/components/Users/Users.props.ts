import { UserProfileProps } from '../interfaces';


export interface UsersProps {
	users?: UserProfileProps[],
	getUsers: (searchValue: string) => void,
	setCurrentProfile: (u: UserProfileProps) => void
}