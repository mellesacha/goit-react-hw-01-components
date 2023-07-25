import PropTypes from 'prop-types';
import cl from "./Profile.module.css"

const Profile = ({ username, tag, location, avatar, followers, views, likes }) => {
    return (
        <div className={cl.profile}>
            <div className={cl.description}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={cl.avatar}
                />
                <p className={cl.name}>{username}</p>
                <p className={cl.tag}>@{tag}</p>
                <p className={cl.location}>{location}</p>
            </div>

            <ul className={cl.socialList}>
                <li className={cl.socialItem}>
                    <span className={cl.label}>Followers</span>
                    <span className={cl.quantity}>{followers}</span>
                </li>
                <li className={cl.socialItem}>
                    <span className={cl.label}>Views</span>
                    <span className={cl.quantity}>{views}</span>
                </li>
                <li className={cl.socialItem}>
                    <span className={cl.label}>Likes</span>
                    <span className={cl.quantity}>{likes}</span>
                </li>
            </ul>
        </div>
    )
};

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
};

export default Profile;