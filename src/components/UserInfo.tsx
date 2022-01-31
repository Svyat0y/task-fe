import React, { ChangeEvent, useEffect, useState } from 'react';
import { searchUserRepos }                         from '../api';
import { NewObjectProps, UserInfoProps }           from './interfaces';


const UserInfo = ({ currentProfile }: UserInfoProps): JSX.Element => {

	const [ currentRepos, setCurrentRepos ] = useState<NewObjectProps[]>();
	const [ searchValue, setSearchValue ] = useState<string>('');

	useEffect(() => {
		if ( currentProfile ) {
			searchUserRepos(searchValue, currentProfile.login)
				.then((data) => setCurrentRepos(data));
		}
	}, [ searchValue ]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const text = e.currentTarget.value.toLowerCase();

		setSearchValue(text);
	};


	return (
		<div className='userInfoWrapper'>
			<h1>User info</h1>
			<div className='user clear'>
				<h3>Github Searcher</h3>
				<div className='p-10'>
					{ currentProfile &&
						<div className='infoBlock'>
							<img width={ 110 } height={ 110 } src={ currentProfile.avatar_url } alt=''/>
							<ul>
								<li>{ currentProfile.name }</li>
								<li>{ currentProfile.email }</li>
								<li>{ currentProfile.location }</li>
								<li>{ currentProfile.created_at }</li>
								<li>Followers { currentProfile.followers }</li>
								<li>Following { currentProfile.following }</li>
							</ul>
						</div>
					}
					<p>This is their biography. It may be long and needs to all fit</p>
					<label>
						<input
							onChange={ handleChange }
							className='search' type='text'
							value={ searchValue }
							placeholder='Search for Users Repositories'/>
					</label>
				</div>
				<ul className='repoList'>
					{ currentRepos && currentRepos.map((repo) => <li key={ repo.id }>
						<span>{ repo.name }</span>
						<div>
							<span>{ repo.forks } Forks</span>
							<span>{ repo.stargazers_count } Stars</span>
						</div>
					</li>) }
				</ul>
			</div>
		</div>
	);
};

export default UserInfo;