import Profile from './profile/Profile.jsx';
import { BrowserRouter } from 'react-router-dom';
import user from './user.json';

const isProduction = process.env.NODE_ENV === 'production';

export const App = () => {
  return (
    <div>
      <BrowserRouter basename={isProduction ? '/goit-react-hw-01-components' : ''}>
        <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}/>
        </BrowserRouter>
    </div>
  );
};
