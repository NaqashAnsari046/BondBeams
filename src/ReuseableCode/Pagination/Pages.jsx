import React from 'react'

const Pages = ({totalPosts,PostPrePages,setCurrentPag}) => {
    let pages = []
    for (let i = 0; i <= totalPosts/PostPrePages ; i++) {
            pages.push(i)
    }

  return (
    <div>
        {
            pages.map((page, ind)=>{
                return <button style={{width:"2.5rem",border:"none", margin:'0.5rem'}} key={ind} onClick={()=>setCurrentPag(page)}>{page}</button>
            })
        }
    </div>
  )
}

export default Pages