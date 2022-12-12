import TextHead from "../../../Component/AdminProfile/RightSide/Info&About/TextBlock/TextHead"
import UserExp from "../UVisitExp/UserExp"
import MainUVisitExp from '../UVisitExp/MainUVisitExp'
import MainUVisitEdu from '../UVisitEdu/MainUVisitEdu'
import MainUVisitSkill from "../UVisitSkill/MainUVisitSkill"
import MainUVisitLang from "../UVisitLang/MainUVisitLang"
import MUVisitPro from "../UVisitProject/MUVisitPro"
import UVisitLCerti from "../Licenses&Certificates/UVisitL&Certi"
import MainUserVisitIMG from "../UIMG/MainUserVisitIMG"
import UserVisitFolwer from "../UserVisitFollower/UserVisitFolwer"
import UVisitAlbum from "../Album/UVisitAlbum"
import Product from '../../../Component/AdminProfile/LeftSide/Product/Product'
import MainGroup from '../../../Component/AdminProfile/LeftSide/Group/MainGroup'





const UservisitProfile = () => {


    
    return (
        <div className='container-fluid setMain'>
            <div className='row'>
                <div className='col-md-8 col-lg-8 col-12' id='ProfileRighte'>    
                   
                    <MainUserVisitIMG />
                    <MainUVisitExp />
                    <MainUVisitEdu />
                    <MainUVisitSkill />
                    <MainUVisitLang />
                    <UVisitLCerti />
                    <MUVisitPro />
                </div>
                <div className='col-md-4 col-lg-4'>  {/* LeftSide Data */}                                      
                    <UserVisitFolwer />
                    <UVisitAlbum />
                    {/* Component resueable */}
                    <MainGroup />
                    <Product />
                    
                </div>
            </div>
          
        </div>
    )
}

export default UservisitProfile