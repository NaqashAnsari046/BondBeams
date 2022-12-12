import { Box, Input, Stack } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import './CertPop.css'
const DialogInput = ({ open, setOpen, ProfileGet }) => {
  const [doc, setDoc] = useState();
  console.log('doc', doc);
  const [desig, setDesig] = useState("");
  const [compName, setCompName] = useState("");
  const [desc, setDesc] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [crId, setCrId] = useState("12345678")
  const inputData = {
    document:doc,
    designation:desig,
    company_name:compName,
    discription:desc,
    credential_id:crId,
    start_date:startDate,
    end_date:endDate
  };
  /*
discription
education_title
end_date
institute_name
start_date
*/

  const handleSubmit = async (e) => {
    e.preventDefault();

    let authToken = localStorage.getItem("token");
    authToken = JSON.parse(authToken);
    let token = "Bearer " + authToken;
    const {
      document,
designation,
company_name,
discription,
credential_id,
start_date,
end_date,
    } = inputData;
    try {
      const formData = new FormData();
      formData.append("document", doc, doc.name)
    formData.append("discription", desc);
    formData.append("designation", desig);
    formData.append("company_name", compName);
    formData.append("credential_id", crId);
    formData.append("start_date", startDate);
    formData.append("end_date", endDate);
      let data = await fetch(
        `https://api.bondbeam.com/api/user_license_certificate/`,
        {
          method: "POST",
          body: formData,
          headers:{
            Authorization: token,
            "Content-Type": "multipart/form-data; charset=utf-8",
          }
        },
        
      );
    } catch (error) {
      console.log(error.message);
    }
    ProfileGet();
  };
 
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      fullWidth
      sx={{
        " .MuiPaper-root": {
          borderRadius: "0px",
          padding: "2.5rem",
        },
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <h2>License & Certificate</h2>
        <CloseIcon
          sx={{ cursor: "pointer" }}
          fontSize="large"
          onClick={() => setOpen(false)}
        />
      </Stack>
      <form onSubmit={handleSubmit}>
        <div className="Experice_div mb-3">
          <input
            className="col-6"
            id="title"
            placeholder="Certificate Title"
            name="designation"
            value={inputData.designation}
            type="text"
            onChange={(e) => setDesig(e.target.value)}
          />
        </div>
        {/* <h4>Anas</h4>  */}
        <div className="mb-3 BorderLeft2">
          <label htmlFor="formFile" className="form-label">
            upload image<i className="fa-solid fa-image"></i>
          </label>
          <input className="form-control" type="file" id="formFile" onChange={(e)=>setDoc(e.target.files[0])}  />
        </div>
        <div className="mb-3 Experice_div">
          <input
          id="BorderLeft1"
            className="col-6 tilte_ex mr-2"
            placeholder="Institute Name"
            name="company_name"
            value={inputData.company_name}
            onChange={(e) => setCompName(e.target.value)}
          />
        </div>
        <div className="Experice_div mb-3">
          <input
            type="date"
            className="col-6"
            id="title"
            placeholder="start_date"
            name="start_date"
            value={inputData.start_date}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="date"
            className="col-5"
            id="title"
            placeholder="end_date"
            name="end_date"
            value={inputData.end_date}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <textarea
            className="col-12"
            id="discription"
            placeholder="Description"
            name="discription"
            value={inputData.discription}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <div className="modal-footer">
          <button
            type="submit"
            data-bs-dismiss="modal"
            aria-label="Close"
            className="btn btn-secondary col-12 "
          >
            Submit
          </button>
        </div>
      </form>
    </Dialog>
  );
};

export default DialogInput;
