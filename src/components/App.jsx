import { FriendList } from "./FriendList";
import friends from "./friends.json";

export const App = () => {
  return (
    <>
      <FriendList
        friends={friends}
        // name={friends.name}
        // avatar={friends.avatar}
        // isOnline={friends.isOnline}
        // id={friends.id}
      />
    </>
  );
};
