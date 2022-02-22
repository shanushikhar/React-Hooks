import React, { useEffect, useState } from "react";

function useR(uid) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    let isCurrent = true;
    fetchUser(uid).then((user) => {
      if (isCurrent) setUser(user);
    });

    // unmounts
    return () => {
      isCurrent = false;
    };
  }, [uid]);
  return user;
}

function getPosts(uid) {
  const [posts, setPosts] = useState(null);
  useEffect(() => subscribeToPosts(uid, setPosts), [uid]);
  return posts;
}

function usepostsAndUser(uid) {
  return { user: useR(uid), posts: getPosts(uid) };
}

export default function Example() {
  const { user, posts } = usepostsAndUser(uid);

  return <div></div>;
}
