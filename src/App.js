import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';

import Profile from './components/Profile.js';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
    </div>
  );
}
