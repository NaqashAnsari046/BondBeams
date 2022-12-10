import React, {useState, useEffect} from 'react'
import TextHead from '../Info&About/TextBlock/TextHead'
import ExpText from '../Experience/ExpText'
import Data from '../Experience/ExpData'
import SkillPut from '../Skill/SkillPopup/SkillPut'
import SkillAdd from './SkillPopup/SkillAdd'
import './Skill.css'
import Exp from '../Experience/Exp'
import { NavLink, useNavigate } from 'react-router-dom'

const Skill = () => {
  const [Now, setNow] = useState([]);
  let navigate = useNavigate()

  useEffect(()=>{
    ProfileGet()
  },[])


    //  user local data & token
    let authToken = localStorage.getItem("token");
    let authUser = localStorage.getItem("user");
    authToken = JSON.parse(authToken);
    authUser = JSON.parse(authUser);
    let id = authUser.data.id;
  
    // Profile Get Api Integrate
    const ProfileGet = async () => {
      let token = "Bearer " + authToken;
      const result = await fetch(`https://api.bondbeam.com/api/user_skill/?profile_id=${id}`, {
        headers: {
          Authorization: token,
        },
      });
      let data = await result.json();
      data = data.data;
      setNow(data);
    };

    // console.log('SkillNow,', Now);

    let Skill = Now.map((item)=>{
      return ({
        title:item.skill_title,
        discription: item.discription,
        start_date:item.start_date,
        end_date : item.end_date,
        id: item.id
      })
    })
    // console.log('Skill', Skill);


    // Delete Api skill
    // const EduDeleteEvent = async (id) => {
    //   let token = "Bearer " + authToken;
    //   const result = await fetch(
    //     `https://api.bondbeam.com/api/user_skill/${id}`,
    //     {
    //       method: "DELETE",
    //       headers: {
    //         Authorization: token,
    //       },
    //     }
    //   );
    //   let newdata = await result.json();
      
    // };


  return (
    < div id='setEdu'>
    <TextHead title='Skill' icon={<SkillAdd />} />
    {Skill.length> 0 && (<ExpText data={Skill}  UpdateFun={SkillPut}  />)}
    </ div>
  )
}


// <div id='setSkill'>
    //     <TextHead title='Skill' />
    //     <div className='row' id='setRowSkil'>
    //         <h1>javascript</h1>
    //             <div className='col-md-1 col-2 col-lg-1 ' id='setSikkImg'>
    //                 {/* <img src={work2} alt='language' /> */}
    //                 <i className="fa-solid fa-users"></i>
    //             </div>
    //             <div className='col-md-10 col-10 col-lg-11'>
    //                 <h3>62 endorsements</h3>
    //             </div>
    //     </div>
    // </div>

export default Skill