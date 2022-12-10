import React, { useEffect } from 'react'
import { useState } from 'react';

const ExpTest = () => {
    const [profile, setProfile] = useState([])
    let authToken = localStorage.getItem("token");
  let authUser = localStorage.getItem("user");
  authToken = JSON.parse(authToken);
  authUser = JSON.parse(authUser);

    const ProfileGet = async () => {
        try {
            let token = "Bearer " + authToken;
            const response = await fetch(
              `https://api.bondbeam.com/api/user_experience/?profile_id=${authUser.data.id}`,
              {
                headers: {
                  Authorization: token,
                },
              }
            );
            let data = await response.json();
            setProfile(data.data)
            console.log('user data', data.data);
            
        } catch (error) {
            console.log(error.message);
        }
      };

useEffect(() => {
    ProfileGet()
}, []);

  return (
    <div>{profile.map((props, index)=><div key={index}>{props.company_name}</div>)}
    <UserDataInput ProfileGet={ProfileGet}/></div>
  )
}



export default ExpTest;

export const UserDataInput = ({ProfileGet}) => {
  const [expTitle, setExpTitle] = useState('')
  const [compName, setCompName] = useState('')
  const [desc, setDesc] = useState('')
  const [jobStatus, setJobStatus] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [address, setAddress] = useState('')
    const inputData = {
      experience_title: expTitle,
      company_name:compName,
      discription:desc,
      job_status:jobStatus,
      start_date:startDate,
      end_date:endDate,
      company_address:address,
    }
    // const [inputData, setInputData] = useState({
    //     experience_title: '',
    //     company_name: "",
    //     discription: "",
    //     job_status:'',
    //     start_date:'',
    //     end_date:'',
    //     company_address:''
    //   })

    const handleSubmit = async(e) => {
        e.preventDefault();
           
  let authToken = localStorage.getItem("token");
  authToken = JSON.parse(authToken);
    let token = "Bearer " + authToken;
    const { experience_title, company_name, discription,job_status, start_date, end_date,company_address } = inputData;
    try {
      let data = await fetch(
        `https://api.bondbeam.com/api/user_experience/`,
        {
          method: "POST",
          body: JSON.stringify({ experience_title, company_name, discription,job_status,start_date, end_date,company_address }),
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      
    } catch (error) {
      console.log(error.message);
    }
    ProfileGet()
    }
    return <>
   <form onSubmit={handleSubmit}>
                  <input
                  value={inputData.experience_title}
                  type='text'
                  onChange={(e)=>setExpTitle(e.target.value)}
                    placeholder="Job Title"
                  />
                   <select
                   value={inputData.job_status}
                   onChange={(e)=>setJobStatus(e.target.value)}
                  >
                    <option>1</option>
                    <option>2</option>
                  </select>
                  <input
                  type='text'
                  value={inputData.company_name}
                  onChange={(e)=>setCompName(e.target.value)}
                    placeholder="Company Name"
                  />
                  <input
                  type='text'
                  value={inputData.company_address}
                  onChange={(e)=>setAddress(e.target.value)}
                    placeholder="Company Address"
                  />
                  <input
                  type='date'
                  value={inputData.start_date}
                  onChange={(e)=>setStartDate(e.target.value)}
                    placeholder="Start Date"
                  />
                    <input
                  type='date'
                  value={inputData.end_date}
                  onChange={(e)=>setEndDate(e.target.value)}
                    placeholder="End Date"
                  />
                  <textarea
                    placeholder="Description"
                    value={inputData.discription}
                    onChange={(e)=>setDesc(e.target.value)}
                  />
                  <input type="submit" value='Submit'/>
              </form>
    </>
}
