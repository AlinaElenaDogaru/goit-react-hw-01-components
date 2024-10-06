import user from '../user.json';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

 const Profile = ({username, tag, location, avatar, stats}) => {
   return (
     <div className={styles.content}>
      <div className={styles.profile}>
  <div className={styles.description}>
    <img
      src={user.avatar}
      alt="User avatar"
      className="avatar"
    />
    <p className={styles.name}>{user.username}</p>
    <p className={styles.tag}>{user.tag}</p>
    <p className={styles.tag}>{user.location}</p>
  </div>

         <ul className={styles.stats}>
    <li>
      <span className={styles.label}>Followers<br/></span>
      <span className={styles.quantity}>{user.stats.followers}</span>
    </li>
    <li>
      <span className={styles.label}>Views <br/></span>
      <span className={styles.quantity}>{user.stats.views}</span>
    </li>
    <li>
      <span className={styles.label}>Likes <br/></span>
      <span className={styles.quantity}>{user.stats.likes}</span>
    </li>
  </ul>
       </div>
       </div>
)
}
export default Profile;