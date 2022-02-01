import { UserProfileProps } from '../interfaces';


export interface UsersItemsProps {
	users?: UserProfileProps[],
	setCurrentProfile: (u: UserProfileProps) => void
}