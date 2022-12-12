import React, {useState, useEffect} from 'react';
import Skill1 from '../../Skill/Skill1/Skill1';
import Skill2 from '../../Skill/Skill2/Skill2';

const Reuse = (props) => {
  const {SkillData} = props;
  const [UserSkillList, setUserSkillList] = useState([]);
  const [userProjectsList, setuserProjectsList] = useState([]);

  useEffect(() => {
    UserSkillApi();
    userProjectsApi();
    // Now()
  }, []);

    // let Now = (e) =>{
    //  SkillData(UserSkillList)
    // }


    //  user local data & token
 //  user local data & token
 let authToken = localStorage.getItem("token");
 let authUser = localStorage.getItem("user");
 authToken = JSON.parse(authToken);
 authUser = JSON.parse(authUser);
 let id = authUser.data.id;

  //User Get Api List
  const UserSkillApi = async () => {
    let token = "Bearer " + authToken;
    const result = await fetch(`https://api.bondbeam.com/api/user_skill/?profile_id=${id}`, {
      headers: {
        Authorization: token,
      },
    });
    let data = await result.json();
    // console.log(data.data);
    data = data.data;
    setUserSkillList(data);
  };
  
  const userProjectsApi = async () => {
    let token = "Bearer " + authToken;
    const result = await fetch(`https://api.bondbeam.com/api/user_project/?profile_id=${id}`, {
      headers: {
        Authorization: token,
      },
    });
    let data = await result.json();
    // console.log(data.data);
    data = data.data;
    setuserProjectsList(data);
  };

  console.log('reuse',userProjectsList);

  return (
    <>
         
           <Skill2 title={'Skill'}  />
    </>
  )
}

export default Reuse