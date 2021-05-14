import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './Post.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
import AccountCircleIclon from '@material-ui/icons/AccountCircle';
import DeleteIcon from '@material-ui/icons/Delete';

const Post = (props) => {
  const {
    profilePic,
    imgName,
    username,
    loggedInUser,
    timestamp,
    message,
    review,
    totalLikes,
    postId,
    onPost,
    onLike,
    onDislike,
    onDelete,
  } = props;

  const [showComments, setShowComments] = useState(false);
  const [showCommentsBox, setShowCommentsBox] = useState(false);
  const [likes, setLikes] = useState(totalLikes);
  const [liked, setLiked] = useState(false);
  const [commentsText, setCommentsText] = useState('');
  let textInput = React.createRef();

  const handleChange = (e) => {
    let text = textInput.current.value;
    setCommentsText(text);
  };

  const incre = (postId) => {
    if (!liked) {
      // likes += 1;
      let incre = likes + 1;
      setLikes(incre);
      setLiked(!liked);
      onLike(postId);
    } else {
      let decre = likes - 1;
      setLikes(decre);
      setLiked(!liked);
      onDislike(postId);
    }
  };

  return (
    <>
      <div className='post'>
        <div className='post__top'>
          <Avatar src={profilePic} className='post__avatar' />
          <div className='post__topInfo'>
            <h3>{username}</h3>
            <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
          </div>
        </div>

        <div className='post__bottom'>
          {loggedInUser === username ? (
            <div className='row'>
              <div className='col-md-11'></div>
              <div className='col-md-1'>
                <span className='post__delete' onClick={() => onDelete(postId)}>
                  <DeleteIcon />
                </span>
              </div>
            </div>
          ) : (
            <></>
          )}

          <div className='row'>
            <div className='col-md-12'>
              <div className='post__body'>
                <h4>{message}</h4>
              </div>
            </div>
          </div>

          {/* <div>
            <div onClick={() => setShowComments(!showComments)}>
              <span className='mt-2 ml-0 post__comments_header'>
                {!showComments ? 'show comments' : 'hide comments'}
              </span>
            </div>

            {showComments &&
              review.map((review) => (
                <div className='mt-2 ml-0 post__comments' key={review._id}>
                  <div className='post__comments_body_name'>{review.name}</div>
                  <div className='post__comments_body_text'>{review.body}</div>
                </div>
              ))}
          </div> */}
        </div>

        {imgName ? (
          <div className='post__image'>
            <img
              src={`http://localhost:9000/retrieve/image/single?name=${imgName}`}
            />
          </div>
        ) : (
          <></>
        )}

        <div className='post__options'>
          <div onClick={() => incre(postId)} className='post__option'>
            <h5 className='mt-1 mr-2 mb-0'> {likes} </h5>
            <ThumbUpIcon
              className='mb-0'
              style={{ color: liked ? '#03ADEC' : 'grey' }}
            />
          </div>

          <div
            className='post__option'
            onClick={() => setShowCommentsBox(!showCommentsBox)}
          >
            <ChatBubbleOutlineIcon />
          </div>
        </div>

        <div>
          {showCommentsBox && (
            <form
              className='mb-3'
              onSubmit={() => onPost(commentsText, postId, username)}
            >
              <div className='input-group ml-5'>
                <label>
                  <textarea
                    className='form-control'
                    ria-label='With textarea'
                    ref={textInput}
                    onChange={handleChange}
                  />
                </label>
                <div className='input-group-prepend mb-2 ml-2'>
                  <input
                    className='input-group-text'
                    type='submit'
                    value='POST'
                  />
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Post;
