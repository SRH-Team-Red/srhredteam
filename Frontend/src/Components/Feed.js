import React, { useEffect, useState } from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';

import axios from '../axios';
import Pusher from 'pusher-js';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const pusher = new Pusher('c397d07b35dad43ab500', {
  cluster: 'eu',
});

const Feed = () => {
  const user = useSelector(selectUser);
  const [profilePic, setProfilePic] = useState('');
  const [postsData, setPostsData] = useState([]);

  const syncFeed = () => {
    axios.get('/retrieve/post').then((res) => {
      setPostsData(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    var channel = pusher.subscribe('posts');
    channel.bind('inserted', function (data) {
      syncFeed();
    });
  }, []);

  useEffect(() => {
    syncFeed();
  }, []);

  const handleCommentPost = async (commentsText, postId) => {
    let body = commentsText;
    let name = user.displayName;
    let postUrl = `http://localhost:9000/post/comment/`;

    let response = await axios.post(
      postUrl,
      {
        comments: {
          body: body,
          name: name,
        },
      },
      {
        headers: {
          id: postId,
        },
      }
    );

    setPostsData(response.data);
  };

  const handleLike = async (postId) => {
    console.log('postId in handle Like', postId);
    let postUrl = `http://localhost:9000/post/like/`;
    let response = await axios.post(postUrl, { id: postId });
    // // update state of posts
    console.log(response);
  };

  const handleDislike = async (postId) => {
    let postUrl = `http://localhost:9000/post/dislike/`;

    let response = await axios.post(postUrl, { id: postId });
    // update state of posts
    console.log(response);
  };

  const handleDelete = async (postId) => {
    let postUrl = `http://localhost:9000/post/delete/${postId}`;

    let response = await axios.delete(postUrl);
    setPostsData(response.data);
  };

  //post pass properties to post component
  return (
    <div className='feed'>
      <MessageSender />

      {postsData.map((entry) => (
        <Post
          postId={entry._id}
          profilePic={entry.avatar}
          message={entry.text}
          timestamp={entry.timestamp}
          imgName={entry.imgName}
          username={entry.user}
          comments={entry.comments}
          totalLikes={entry.likes}
          onPost={handleCommentPost}
          onLike={handleLike}
          onDislike={handleDislike}
          onDelete={handleDelete}
          loggedInUser={user.displayName}
        />
      ))}
    </div>
  );
};

export default Feed;
