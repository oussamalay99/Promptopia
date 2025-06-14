"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const MyProfile = () => {
  const handleEdit = () => {};
  const handleDelete = async () => {};
  const { data: session } = useSession();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      console.log(data);
      setPosts(data);
    };
    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);
  return (
    <Profile
      name="My"
      desc="Welcome to your personilzed page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
