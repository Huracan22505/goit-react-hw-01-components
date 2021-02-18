import s from './FriendList.module.css';

const FriendList = function ({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={s.item}>
          <span className={s.status}></span>
          <img
            className={s.avatar}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
