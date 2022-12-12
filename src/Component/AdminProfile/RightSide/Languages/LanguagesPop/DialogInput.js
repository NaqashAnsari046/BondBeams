import { Stack } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
const DialogInput = ({open, setOpen,ProfileGet}) => {
  const [language, setLanguage] = useState('')
    const inputData = {
      language,
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
           
  let authToken = localStorage.getItem("token");
  authToken = JSON.parse(authToken);
    let token = "Bearer " + authToken;
    const { language } = inputData;
    try {
      let data = await fetch(
        `https://api.bondbeam.com/api/user_language/`,
        {
          method: "POST",
          body: JSON.stringify({ language }),
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
            <h2>Languages</h2>
            <CloseIcon sx={{cursor:'pointer'}} fontSize='large' onClick={()=>setOpen(false)}/>
        </Stack>
        <form onSubmit={handleSubmit}>
                <div className="Experice_div mb-3">
                  <input
                    className="col-12"
                    id="title"
                    placeholder="Enter Lanuage"
                    name="language"
                    value={inputData.language}
                  type='text'
                  onChange={(e)=>setLanguage(e.target.value)}
                  />
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