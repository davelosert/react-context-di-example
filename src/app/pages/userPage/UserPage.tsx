import { useAppApi } from '../../appApi/AppApiContext';
import { User } from './User';
import { Fragment, FunctionComponent, ReactElement, useEffect, useState } from 'react';

const UserPage: FunctionComponent = (): ReactElement => {
  const { userApi } = useAppApi();
  const [ status, setStatus ] = useState('loading');
  const [ users, setUsers ] = useState<User[]>([]);

  useEffect((): void => {
    userApi.getUsers().
      then((returnedUser): void => {
        setUsers(returnedUser);
        setStatus('success');
      }).catch((ex): void => {
        // eslint-disable-next-line no-console
        console.error(`Error while fetching users:`, { error: ex });
      });
  }, [ userApi ]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  const usersLi = users.map((user): ReactElement => (
    <li key={ `userlist-${user.id}` }>{ user.firstName} {user.lastName}</li>
  ));

  return (
    <Fragment>
      <h1>UserPage</h1>
      <ul>
        {usersLi}
      </ul>
    </Fragment>
  );
};

export {
  UserPage
};
