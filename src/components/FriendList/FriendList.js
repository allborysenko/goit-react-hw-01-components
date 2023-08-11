import PropTypes from 'prop-types';
import {
  Wrapper,
  Friend,
  AvatarName,
  Avatar,
  Status,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return <Wrapper>{friends.map(FriendListItem)}</Wrapper>;
};

function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <Friend key={id}>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <AvatarName>{name}</AvatarName>
    </Friend>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
