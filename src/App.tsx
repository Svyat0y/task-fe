import { Route, Routes }    from 'react-router-dom';
import { UserInfo, Users }  from './components';
import { useState }         from 'react';
import { fetchUsers }       from './api';
import { UserProfileProps } from './components/interfaces';


const App = (): JSX.Element => {
	const [ users, setUsers ] = useState<UserProfileProps[]>();
	const [ currentProfile, setCurrentProfile ] = useState<UserProfileProps>();

	const getUsers = (userName: string): void => {
		if ( userName ) {
			fetchUsers(userName)
				.then((data: UserProfileProps[]) => setUsers(data));
		}
	};

	return (
		<div className="wrapper">
			<Routes>
				<Route path={ '/' } element={
					<Users
						getUsers={ getUsers }
						users={ users }
						setCurrentProfile={ setCurrentProfile }
					/> }/>
				<Route path={ '/user-info' } element={
					<UserInfo
						currentProfile={ currentProfile }
					/> }/>
			</Routes>
		</div>
	);
};

export default App;
