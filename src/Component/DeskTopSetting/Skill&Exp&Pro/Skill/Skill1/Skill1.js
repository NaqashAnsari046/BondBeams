import React, { useState } from "react";
import "./Skill1.css";

const Notify = () => {
  const [VerifySkill, setVerifySkill] = useState({
    verify_reason:''
  });

  const TextAreaSkill = (e) =>{
      const {name,value} = e.target;

      setVerifySkill((PreValue)=>{
        return{
          ...PreValue,
          [name]:value
        }
      })
  }

   //  user local data & token
   let authToken = localStorage.getItem('token');
   authToken = JSON.parse(authToken);


  // Patch APi

  const VeriFication = async(e) =>{
      e.preventDefault();
      console.log('id',VerifySkill);

      e.preventDefault();
      const {verify_reason} = VerifySkill;
      let token = "Bearer "+authToken
      let data = await fetch(`https://api.bondbeam.com/api/user_skill/1`,{
        method:"PUT",
        body:JSON.stringify({verify_reason}),
        headers:{
          "Content-Type":"application/json",
          "Authorization":token
        }
      });
      data = await data.json();
  }






  return (
    <div id="USkill1" >
      <div id="InnerSkill1">
        <h1>Skill</h1>

        <div className='pera'>
                    <h2>Skill Title</h2>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
                    </p>
                </div>
                <textarea placeholder="text......" className="text_area" name="verify_reason" value={VerifySkill.verify_reason} onChange={TextAreaSkill} />
                <button className="btn_notify" onClick={VeriFication}>Notify</button>
      </div>
    </div>
  );
};

export default Notify;
