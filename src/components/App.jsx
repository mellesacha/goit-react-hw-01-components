import user from "../data/user.json";
import Profile from "./Profile/Profile";

import data from "../data/data.json";
import Statistics from "./Statistics/Statistics";

import friends from "../data/friends.json";
import FriendList from "./FriendList/FriendList";

import transactions from "../data/ transactions.json";
import Transactions from "./TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <>
    <Profile
      username={user.username}
      avatar={user.avatar}
      tag={user.tag}
      location={user.location}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
<Statistics stats={data} />
      <FriendList friends={friends} />
      <Transactions items={transactions } />
    </>
    
  
  );
};
