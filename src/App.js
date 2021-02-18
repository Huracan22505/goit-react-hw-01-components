import user from 'db/user.json';
import statisticalData from 'db/statistical-data.json';
import friends from 'db/friends.json';
import transactions from 'db/transactions.json';

import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import FriendList from 'components/FriendList';
import TransactionHistory from 'components/TransactionHistory';

export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
