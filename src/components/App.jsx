import Profile from './profile/Profile.jsx';
import { BrowserRouter } from 'react-router-dom';

const isProduction = process.env.NODE_ENV === 'production';

export const App = () => {
  return (
    <div>
      <BrowserRouter basename= { isProduction ? '/goit-react-hw-01' : ''}>
        <Profile />
        </BrowserRouter>
    </div>
  );
};
