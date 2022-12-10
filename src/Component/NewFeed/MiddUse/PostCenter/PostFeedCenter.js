import React, {useEffect, useState} from 'react';
import PostBody from '../../../AdminProfile/RightSide/PostPage/PostBody';
import PostHeadFeedNew from './PostHeadFeedNew';
import './PostFeedNews.css';


const PostFeedCenter = (props) => {

  return (
    <div className='FeedNowPost'>

      {/* {
        NewFeedGetApi.length > 0 && (
          <PostBody NewFeedGetAp={NewFeedGetApi} />
        )
      } */}
                    {/* {NewFeedDataAPi.length > 0 && (<PostBody NewFeedDataAPi={NewFeedDataAPi} />) } */}

          <PostHeadFeedNew />

        
    </div>
  )
}

export default PostFeedCenter