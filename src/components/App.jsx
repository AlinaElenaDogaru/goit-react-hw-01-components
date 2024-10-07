import Profile from './profile/Profile.jsx';
import { BrowserRouter } from 'react-router-dom';
import user from './user.json';
import Statistics from './statistics/Statistics.jsx';
import FriendList from './friends/FriendsComponents.jsx';
import TransactionHistory from './transactions/Transactions.jsx';

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
          stats={user.stats} />
        <Statistics condition='true' title='Upload stats' />
        <FriendList />
        <TransactionHistory />
        </BrowserRouter>
    </div>
  );
};
