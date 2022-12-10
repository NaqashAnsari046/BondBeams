import { Stack } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
const DialogInput = ({open, setOpen,ProfileGet}) => {
  const [skillTitle, setSkillTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  
    const inputData = {
      skill_title:skillTitle,
      discription:desc,
      start_date:startDate,
      end_date:endDate,
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
           
  let authToken = localStorage.getItem("token");
  authToken = JSON.parse(authToken);
    let token = "Bearer " + authToken;
    const { skill_title, discription, start_date, end_date } = inputData;
    try {
      let data = await fetch(
        `https://api.bondbeam.com/api/user_skill/`,
        {
          method: "POST",
          body: JSON.stringify({ skill_title, discription,start_date, end_date }),
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
            borderRadius:'23px',
            padding:'10px'
        }}}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
            <h2>Skills</h2>
            <CloseIcon sx={{cursor:'pointer'}} fontSize='large' onClick={()=>setOpen(false)}/>
        </Stack>
        <form onSubmit={handleSubmit}>
                <div className="Experice_div mb-3">
                  <input
                    className="col-12"
                    id="title"
                    placeholder="Enter Skill"
                    name="skill_title"
                    value={inputData.skill_title}
                  type='text'
                  onChange={(e)=>setSkillTitle(e.target.value)}
                  />
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
                className="btn btn-secondary col-12 "
              >
                Post
              </button>
            </div>
              </form>
      </Dialog>
  )
}

export default DialogInput