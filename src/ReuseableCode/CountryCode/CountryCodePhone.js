import React,{useEffect, useState} from 'react'
// import Input from 'react-phone-number-input/input'
const countryCodes = require('country-codes-list')


const CountryCodePhone = () => {
  const [Object1, setmyCountryCodesObject] = useState();
  const myCountryCodesObject = countryCodes.customList('countryCode', '[{countryCode}] {countryNameEn}: +{countryCallingCode}')
//   let Object1 = myCountryCodesObject;


  useEffect(()=>{
  setmyCountryCodesObject(myCountryCodesObject)
  },[])
// console.log(Object1);

// let txt = '';
//    for(var i=0; i<Object1.length; i++){
//       txt += Object1[i]
//       console.log(txt);
//    }
//    console.log(txt);

  return (
     <>
      <input  placeholder={Object1}   />
      {
         Object1.map((item)=>{
            return(
               <h2>item.country</h2>
            )
         })
      }
     </>
      

   )
}

export default CountryCodePhone