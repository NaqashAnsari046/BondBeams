import React from 'react'

const Paginations = ({totalPosts,PostPrePages,setCurrentPage}) => {
    let pages = []
    for (let i = 0; i <= totalPosts/PostPrePages ; i++) {
            pages.push(i)
    }

  return (
    <div>
        {
            pages.map((page, ind)=>{
                return <button style={{width:"2.5rem",border:"none", margin:'0.5rem'}} key={ind} onClick={()=>setCurrentPage(page)}>{page}</button>
            })
        }
    </div>
  )
}

export default Paginations