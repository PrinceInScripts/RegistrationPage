import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/slice/authSlice";
import Layout from "../Layout/Layout";
import toast from "react-hot-toast";

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      {user ? (
        <Layout>
          <div className="card w-96 bg-primary text-primary-content p-6 rounded-md ">
            <h1 className="text-2xl font-bold mb-4">User Profile</h1>
            <div className="mb-4">
              <p className="block text-gray-600 text-sm font-semibold mb-2">
                Name: <span className="text-gray-800">{user.name}</span>
              </p>
              <p className="block text-gray-600 text-sm font-semibold mb-2">
                Email: <span className="text-gray-800">{user.email}</span>
              </p>
            </div>
          </div>
        </Layout>
      ) : (
        <Layout>
          <div className="card w-96 bg-primary text-primary-content p-6 rounded-md ">
            <h1 className="text-2xl font-bold mb-4">User not found</h1>
          </div>
        </Layout>
      )}
    </>
  );
};

export default UserProfile;
