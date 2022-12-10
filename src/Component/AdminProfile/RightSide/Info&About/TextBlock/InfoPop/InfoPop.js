import { useEffect } from "react";
import { createContext ,useState} from "react";
import { BsFillPencilFill } from "react-icons/bs";
import "./info.css";
export let GlobalAbout = createContext();



function Info({InfoUpDate, Prefill, ProfileGet}) {
  const [CreateN, setCreateN] = useState()
  const [InfoPost, setInfoPost] = useState({
    work_place: Prefill.work_place,
    relationship:Prefill.relationship,
    study_at:Prefill.study_at,
    address:Prefill.address,
  });




  // event
  const InfoPostEvent = (e) => {
    const { name, value } = e.target;

    setInfoPost((PreVal) => {
      return {
        ...PreVal,
        [name]: value,
      };
    });
  };

  //  user local data & token
  let authToken = localStorage.getItem("token");
  let authUser = localStorage.getItem("user");
  authToken = JSON.parse(authToken);
  authUser = JSON.parse(authUser);
  let id = authUser.data.id;
  
  const InfoSave = async (e) => {
    const { work_place,relationship,study_at,address } = InfoPost;
    let token = "Bearer " + authToken;
    let data = await fetch(`https://api.bondbeam.com/api/user_profile/${id}`, 
    {
      method: "PATCH",
      body: JSON.stringify({ work_place,relationship,study_at,address }),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    data = await data.json();
    setCreateN(data)
    // ProfileGet()
    if(data.success == true){
    }
   InfoUpDate(CreateN)

  };
  

  return (
    <>
      <button
        id="InfoBtn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        <BsFillPencilFill />
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Info
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3 Experice_div">
                  <input className="col-6 tilte_ex" placeholder={Prefill.work_place} name="work_place" value={InfoPost.work_place} onChange={InfoPostEvent} />
                  <input className="col-6" id="title" placeholder={Prefill.relationship} name="study_at" value={InfoPost.study_at} onChange={InfoPostEvent} />
                </div>
                <div className="mb-3 Experice_div">
                  <input className="col-6 tilte_ex" placeholder={Prefill.study_at} name="address" value={InfoPost.address} onChange={InfoPostEvent} />
                  <input className="col-6" id="title" placeholder={Prefill.address} name="relationship" value={InfoPost.relationship} onChange={InfoPostEvent} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" 
                data-bs-dismiss="modal"
                aria-label="Close"
              className="btn btn-secondary col-12 " onClick={InfoSave}>
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
