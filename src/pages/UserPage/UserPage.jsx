import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const UserPage = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <div>{user?.username}</div>
      <img src={user?.avatar} width={50} height={50} alt={404} />;
    </>
  );
};

export default UserPage;
