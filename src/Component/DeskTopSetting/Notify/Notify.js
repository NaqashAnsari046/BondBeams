import React, { useState } from "react";
import "./Notify.css";
import "../../../App.css"

const Notify = () => {
  const [CheckBoxGS, setCheckBoxGS] = useState({
    value: "Someone likes my posts",
    check: true,
  });
  const [CheckBoxGS1, setCheckBoxGS1] = useState({
    value: "Someone comments on my posts",
    check: true,
  });
  const [CheckBoxGS2, setCheckBoxGS2] = useState({
    value: "Someone shares my posts",
    check: true,
  });
  const [CheckBoxGS3, setCheckBoxGS3] = useState({
    value: "Someone follows me",
    check: true,
  });
  const [CheckBoxGS4, setCheckBoxGS4] = useState({
    value: "Someone mentions me",
    check: true,
  });
  const [CheckBoxGS5, setCheckBoxGS5] = useState({
    value: "Someone joins my group",
    check: true,
  });
  const CheckSubmit = (e) => {
    e.preventDefault();
    var obj = {
      value1: CheckBoxGS,
      value2: CheckBoxGS1,
      value3: CheckBoxGS2,
      value4: CheckBoxGS3,
      value5: CheckBoxGS4,
      value6: CheckBoxGS5,
    };

    console.log(obj);
  };

  return (
    <div id="StyleSame1">
      <div id="StyleSame2">
        <h1>Notify me when</h1>
        <form onSubmit={CheckSubmit}>
          <div className="form-check" id="setNotyCheck">
            <input
              className="form-check-input"
              type="checkbox"
              name="0"
              value="Someone likes my posts"
              defaultChecked
              onChange={(e) =>
                setCheckBoxGS({
                  value: e.target.checked?e.target.value:"",
                  check: e.target.checked,
                })
              }
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Someone likes my posts.
            </label>
          </div>

          <div className="form-check" id="setNotyCheck">
            <input
              className="form-check-input"
              type="checkbox"
              name="1"
              defaultChecked
              value="Someone comments on my posts."
              onChange={(e) =>
                setCheckBoxGS1({
                  value: e.target.checked?e.target.value:"",
                  check: e.target.checked,
                })
              }
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Someone comments on my posts.
            </label>
          </div>

          <div className="form-check" id="setNotyCheck">
            <input
              className="form-check-input"
              type="checkbox"
              name="2"
              defaultChecked
              value="Someone shares my posts."
              onChange={(e) =>
                setCheckBoxGS2({
                  value: e.target.checked?e.target.value:"",
                  check: e.target.checked,
                })
              }
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Someone shares my posts.
            </label>
          </div>

          <div className="form-check" id="setNotyCheck">
            <input
              className="form-check-input"
              type="checkbox"
              name="3"
              defaultChecked
              value="Someone follows me."
              onChange={(e) =>
                setCheckBoxGS3({
                  value: e.target.checked?e.target.value:"",
                  check: e.target.checked,
                })
              }
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Someone follows me.
            </label>
          </div>

          <div className="form-check" id="setNotyCheck">
            <input
              className="form-check-input"
              type="checkbox"
              name="4"
              defaultChecked
              value="Someone mentions me."
              onChange={(e) =>
                setCheckBoxGS4({
                  value: e.target.checked?e.target.value:"",
                  check: e.target.checked,
                })
              }
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Someone mentions me.
            </label>
          </div>

          <div className="form-check" id="setNotyCheck">
            <input
              className="form-check-input"
              type="checkbox"
              name="5"
              defaultChecked
              value=" Someone joins my group."
              id="flexCheckDefault"
              onChange={(e) =>
                setCheckBoxGS5({
                  value: e.target.checked?e.target.value:"",
                  check: e.target.checked,
                })
              }
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Someone joins my group.
            </label>
          </div>

          <button type="submit">save</button>
        </form>
      </div>
    </div>
  );
};

export default Notify;
