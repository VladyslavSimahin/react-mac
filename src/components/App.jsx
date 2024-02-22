import { FriendList } from "./FriendList";
import friends from "./friends.json";
import { Payment } from "./Payment/Payment";
import prices from "./paymentprice.json";

export const App = () => {
  return (
    <>
      <FriendList friends={friends} />
      <Payment prices={prices} />
    </>
  );
};
export default App;
