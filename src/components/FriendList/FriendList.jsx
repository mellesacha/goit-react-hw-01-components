import FriendListItem from "../FriendList/FriendListItem";
import cl from "./FriendList.module.css";

const FriendList = ({ friends }) => {
    return (
        <ul className={cl.friendList}>
            {friends.map(({avatar, name, isOnline, id}) => {
                return (<FriendListItem
                    avatar={avatar}
                    name={name}
                    key={id}
                    isOnline={isOnline}
                />)
            }
             )}
    </ul>
)
}

export default FriendList;