import React from 'react'
// import FbImageLibrary from 'react-fb-image-grid'
import picture from '../../../../img/FeedNew/cons4.jpg'

const PostGallay1 = (props) => {
  // console.log('src', props.imgGallary);
  const {imgGallary} = props;
   let imge= imgGallary.map((item)=>{
    return item.post_image
  })
  // console.log(imge,"src");
   let img =imge
    return (
      <div>
      {/* <FbImageLibrary images={img}/> */}
      </div>
    )
}

export default PostGallay1