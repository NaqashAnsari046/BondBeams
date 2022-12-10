import React from 'react';
import './style.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const DelAccount = () => {
    const DeleteAccount = () =>{
        toast('Coming Soon....')
    }
    return (
        <div className='container-fluid' id='Delete' >
                <div className='col-lg-8 col-md-12' id='setDelete'>
                        <h4 className='heading'>Delete Account</h4>
                        <p className='p-4'><b id='setMsmall'>Warning: </b>This will erase every information from your account including image, messaegs etc.</p>
                       <div className='del-btn'>
                           <button className='btn btn-danger' onClick={DeleteAccount}>Delete Account</button>
                       </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default DelAccount;
