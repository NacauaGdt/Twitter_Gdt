import PropTypes from "prop-types";
import { getAvatar } from "../../utils/generateImages";

export function FollowItem({ name, username }) {
  const avatar = getAvatar(
    `${name}${Math.floor(Math.random() * 1000)}@email.com`
  );

  return (
    <div className="flex  items-center  justify-between  py-3  hover:bg-gray-800  transition duration-200">
      <div className="flex  items-center">
        <img
          className="w-12  h-12  rounded-full  mr-3"
          src={avatar}
          alt="user avatar"
        />
        <div>
          <p className="font-bold">{name}</p>
          <p className="font-gray-500">{username}</p>
        </div>
      </div>
      <button className="bg-white  text-black  font-bold  px-4  py-2  rounded-full  hover:bg-gray-300  transition duration-200">
        Follow
      </button>
    </div>
  );
}

FollowItem.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
};
