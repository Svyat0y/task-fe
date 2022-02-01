import { ChangeEvent, useEffect, useState } from 'react';

import { UserItems }  from '../index';
import { UsersProps } from './Users.props';


const Users = ({ users, getUsers, setCurrentProfile }: UsersProps): JSX.Element => {
	const [ searchValue, setSearchValue ] = useState<string>('');

	useEffect(() => {
		const timer = setTimeout(() => {
			getUsers(searchValue);
		}, 500);

		return () => clearInterval(timer);
	}, [ searchValue ]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	return (
		<div className='usersWrapper'>
			<h1>Users</h1>
			<div className='users clear'>
				<div className='searcherBlock'>
					<div className='searcher'>
						<h3>Github Searcher</h3>
						<label>
							<input
								onChange={ handleChange }
								value={ searchValue }
								className='search'
								type='search'
								placeholder='Search for Users'
							/>
						</label>
					</div>
				</div>
				<UserItems
					users={ users }
					setCurrentProfile={ setCurrentProfile }
				/>
			</div>
		</div>
	);
};

export default Users;