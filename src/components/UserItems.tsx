import { Link }            from 'react-router-dom';
import { UsersItemsProps } from './interfaces/userProfile.interface';


const UserItems = ({ users, setCurrentProfile }: UsersItemsProps): JSX.Element => {

	return (
		<ul className='usersList'>
			{ users && users.map((u) => (
					u && <li key={ u.id } onClick={ () => setCurrentProfile(u) }>
						<Link to={ '/user-info' }>
							<img width={ 50 } height={ 50 } src={ u.avatar_url } alt='user-avatar'/>
							<span>{ u.name }</span>
							<div>Repo: { u.public_repos }</div>
						</Link>
					</li>
				)
			) }
		</ul>
	);
};

export default UserItems;