import cl from "./FriendListItem.module.css";
import PropTypes from "prop-types";

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <li className={cl.item}>
  <span className={isOnline ? `${cl.status} ${cl.green}` : `${cl.status} ${cl.red}`}></span>
  <img className={cl.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={cl.name}>{ name}</p>
</li>
    )
}

export default FriendListItem;

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}