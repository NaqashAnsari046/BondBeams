import { Stack } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
const DialogInput = ({open, setOpen,ProfileGet}) => {
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
  return (
    <Dialog
        open={open}
        onClose={()=>setOpen(false)}
        fullWidth
        sx={{' .MuiPaper-root':{
            borderRadius:'0px',
            padding:'2.5rem'
        }}}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
            <h2>Experience</h2>
            <CloseIcon sx={{cursor:'pointer'}} fontSize='large' onClick={()=>setOpen(false)}/>
        </Stack>
        <form onSubmit={handleSubmit}>
                <div className="Experice_div mb-3">
                  <input
                    className="col-6"
                    id="title"
                    placeholder="Job Title"
                    name="experience_title"
                    value={inputData.experience_title}
                    type='text'
                    onChange={(e)=>setExpTitle(e.target.value)}
                  />
                   <select
                   className="col-5 jobtitleExp"
                    name="job_status"
                    id="selet"
                    value={inputData.job_status}
                   onChange={(e)=>setJobStatus(e.target.value)}
                  >
                    <option>Full-time</option>
                    <option>Half-time</option>
                    <option>Self-employee</option>
                  </select>
                </div>
                <div className="mb-3 Experice_div">
                  <input
                    className="col-6 border-0"
                    placeholder="Company"
                    name="company_name"
                    value={inputData.company_name}
                    onChange={(e)=>setCompName(e.target.value)}
                  />
                  <input
                    id='BorderLeft'
                    className="col-5 tilte_ex border-0"
                    placeholder="company_address"
                    name="company_address"
                    value={inputData.company_address}
                    onChange={(e)=>setAddress(e.target.value)}
                  />
                  {/* <input className="col-6" id="title" placeholder="full time"   onChange={ExperianceEvent} /> */}
                 
                </div>
                <div className="Experice_div mb-3">
                  <input
                  type='date'
                    className="col-6"
                    id="title"
                    placeholder="start_date"
                    name="start_date"
                    value={inputData.start_date}
                  onChange={(e)=>setStartDate(e.target.value)}
                  />
                   <input
                  type='date'
                    className="col-5"
                    id="title"
                    placeholder="end_date"
                    name="end_date"
                    value={inputData.end_date}
                  onChange={(e)=>setEndDate(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    className="col-12"
                    id="discription"
                    placeholder="Description"
                    name="discription"
                    value={inputData.discription}
                    onChange={(e)=>setDesc(e.target.value)}
                  ></textarea>
                </div>
                <div className="modal-footer">
              <button
                type="submit"
                data-bs-dismiss="modal"
                aria-label="Close"
                className="btn btn-secondary col-12"
              >
                Submit
              </button>
            </div>
              </form>
      </Dialog>
  )
}

export default DialogInput