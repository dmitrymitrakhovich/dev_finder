import { Container } from 'components/Container';
import { Search } from 'components/Search';
import { SomethingWrong } from 'components/SomethingWrong';
import { Spinner } from 'components/Spinner';
import { TheHeader } from 'components/TheHeader';
import { UserCard } from 'components/UserCard';
import { defaultUser } from 'mock';
import { useState } from 'react';
import { GithubError, GithubUser, LocalGuthubUser } from 'types';
import { extractLocalUser } from 'utils/extract-local-user';
import { isGithubUser } from 'utils/typeguards';

const BASE_URL = 'https://api.github.com/users/';

function App() {
  const [user, setUser] = useState<LocalGuthubUser | null>(defaultUser);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const fetchUser = async (username: string) => {
    try {
      setLoading(true);
      const url = BASE_URL + username;

      const res = await fetch(url);
      const user = (await res.json()) as GithubUser | GithubError;

      if (isGithubUser(user)) {
        setUser(extractLocalUser(user));
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <TheHeader />
      <Search onSubmit={fetchUser} />
      {(isError || !user) && <SomethingWrong />}
      {isLoading && <Spinner />}
      {!isError && !isLoading && user && <UserCard {...user} />}
    </Container>
  );
}

export default App;
