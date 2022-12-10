import React, {useState,useMemo,useEffect} from 'react'
import Select from "react-select";
import countryList from "react-select-country-list";


const CountryList = () => {
    const [GData, setGData] = useState({
      label:''
    });
    const countryname = useMemo(() => countryList().getData(), []);
    console.log(GData);
    

    useEffect(()=>{

    })

  


    // useEffect(() => {
    //     let auth = localStorage.getItem("user");
    //     auth = JSON.parse(auth);
    //     let data = auth.data;
    //     setGData(data);
    //   },[]);

  // const changeHandler = (value) => {
  //   setValue(value)
  //   console.log(value);
  // }

  // const handleCountry = (event) =>{
  //     const getcountryId = event.target.value;
  //     getcountryCOde(getcountryId);
  // }


  const InputEvent = (e) =>{
      const {name,value} = e.target;

      setGData((Prev)=>{
        return{
          ...Prev,
          [name]:value
        }
      })
  }


  return (<>
  
    <select value={GData.label} name='label' onChange={InputEvent}>
    <option>select Countrty</option>
   {
    countryname.map((item,index)=>{
      return <option key={index}  >{item.label}</option>
    })
   }
  
  </select>

  </>
  )
}

export default CountryList