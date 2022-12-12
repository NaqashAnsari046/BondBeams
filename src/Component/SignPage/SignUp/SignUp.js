import React, { useState, useEffect, useRef } from "react";
import "./SignUp.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [getcountry, setgetcountry] = useState([]);
  const [sendSignUpId, setsendSignUpId] = useState([]);
  const [value, setValue] = useState("");
  let navigate = useNavigate();
  let FNRef = useRef(null);
  let LNRef = useRef(null);
  let emailRef = useRef(null);
  let phoneRef = useRef(null);
  let passwordRef = useRef(null);
  let [error, setError] = useState(false);
  console.log(value);
  const [Reg, setReg] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone_no: "",
    phone_code: "",
    checked: "Off",
  });
  console.log(Reg.phone_code);

  const InputEvent = (e) => {
    const { name, value } = e.target;
    setReg((PreValue) => {
      return {
        ...PreValue,
        [name]: value,
      };
    });
  };

  const DataSub = async (e) => {
    FNRef.current.style.border = "1px solid gainsboro";
    LNRef.current.style.border = "1px solid gainsboro";
    emailRef.current.style.border = "1px solid gainsboro";
    passwordRef.current.style.border = "1px solid gainsboro";
    phoneRef.current.style.border = "1px solid gainsboro";
    e.preventDefault();
    const {
      first_name,
      last_name,
      password,
      email,
      phone_no,
      checked,
      phone_code,
    } = Reg;
    console.log(Reg);
    // if(!first_name || !last_name || !password || !phone_no){
    //   setError(true);
    //   return false;
    // }
    let data = await fetch(`https://api.bondbeam.com/api/register/`, {
      method: "POST",
      body: JSON.stringify({
        first_name,
        last_name,
        password,
        email,
        phone_no,
        phone_code,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    data = await data.json();
    console.log('id',data.msg);
    toast(data.msg)
    let result  = data.data.id;
    let status  = data.data.status;
    localStorage.setItem('SignUp_id', result)
    // console.log('id',result);
    if (data.status == true) {
       navigate('/verification')
    } else if(data.data.is_active == false) {
      navigate('/verification')
    }
    // console.log(data);
  };

  // const [value, setValue] = useState("")

  useEffect(() => {
    const getcountrydata = async () => {
      const response = await axios
        .get(`https://restcountries.com/v2/all`)
        .catch((err) => {
          console.log(err);
        });
      setgetcountry(response.data);
    };
    getcountrydata();
  }, []);
  const getcode = (e) => {
    console.log(e.target.value);
    var phone_code = getcountry[e.target.value].callingCodes[0];
    console.log(phone_code);

    Reg.phone_code = phone_code;
  };

  return (
    <div className="SginageSet">
      <div id="signFrom">
        {/* <img src={img} alt="logo" /> */}
        <h2>Sign Up</h2>
        <div>
          <label>
            <h6>First Name</h6>{" "}
            <h6>
              {" "}
              {error && !Reg.first_name && (
                <span id="error">field required </span>
              )}
            </h6>
          </label>
          <input
            ref={FNRef}
            type="text"
            name="first_name"
            value={Reg.first_name}
            onChange={InputEvent}
            placeholder="first name"
          />

          <label>
            <h6>last Name</h6>{" "}
            <h6>
              {" "}
              {error && !Reg.last_name && (
                <span id="error">field required </span>
              )}
            </h6>
          </label>

          <input
            ref={LNRef}
            type="text"
            name="last_name"
            placeholder="last name"
            value={Reg.last_name}
            onChange={InputEvent}
          />
          <label>
            <h6>email</h6>{" "}
            <h6>
              {" "}
              {error && !Reg.email && <span id="error">field required </span>}
            </h6>
          </label>
          <input
            type="text"
            ref={emailRef}
            name="email"
            value={Reg.email}
            onChange={InputEvent}
            placeholder="email"
          />
          <label>
            <h6>Code</h6>{" "}
            <h6>
              {" "}
              {error && !Reg.phone && <span id="error">field required </span>}
            </h6>
          </label>
          {/* <CountryCodePhone  /> */}
          {/* <input
                type="text"
                ref={phoneRef}
                name="phone_code"
                value={Reg.phone_code}
                onChange={InputEvent}
                placeholder='+92'
              /> */}
          <select className="phone_code" name="phone_code" onChange={getcode}>
            <option value={value}>Select Country--</option>
            {getcountry.map((resCountry, index) => (
              <option key={index} value={index}>
                {resCountry.name}
              </option>
            ))}
          </select>
          <label>
            <h6>phone</h6>{" "}
            <h6>
              {" "}
              {error && !Reg.phone && <span id="error">field required </span>}
            </h6>
          </label>
          {/* <CountryCodePhone  /> */}
          <input
            type="text"
            ref={phoneRef}
            name="phone_no"
            value={Reg.phone_no}
            onChange={InputEvent}
            placeholder="phone_no"
          />
          <label>
            <h6>password</h6>{" "}
            <h6>
              {" "}
              {error && !Reg.password && (
                <span id="error">field required </span>
              )}
            </h6>
          </label>
          <input
            type="text"
            name="password"
            ref={passwordRef}
            value={Reg.password}
            placeholder="password"
            onChange={InputEvent}
          />
        </div>

        <div id="setcheckbox">
          <input type="checkbox" name="checked" onChange={InputEvent} />
          <label id="setboxtext">
            i agree bond team user agreement, privacy, policy and cookie policy 
          </label>
        </div>
        <button type="submit" onClick={DataSub}>
          Submit
        </button>
        {/* <div className="icon">
          <i className="fa fa-google text-success"></i>
          <i className="fa fa-facebook-square text-primary"></i>
          <i className="fa fa-twitter text-info"></i>
        </div> */}
        <h3>
          already have an account? <NavLink to="/signin">Sign In</NavLink>
        </h3>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
