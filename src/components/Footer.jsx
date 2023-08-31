import * as React from 'react';
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlinePhone, AiOutlineMail, AiFillYoutube , AiOutlineTwitter} from "react-icons/ai";
import { BiLogoFacebook, BiCopyright} from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
export default function Footer () {
    return(
      <div className='footer mt-5'>
        
        <h2 className='heromsg pt-5'>Get in Touch!</h2>
        <div>
            <MdOutlineLocationOn className='flogo'/>
        </div>
        <small>Okigwe road opposite government college owerri, Imo state</small>
        <div>
            <AiOutlinePhone className='flogo'/>
        </div>
        <small>07068162269</small>
        <div>
            <AiOutlineMail className='flogo'/>
        </div>
        <small>touchstonempire@gmail.com</small>

        <div>
            <BiLogoFacebook  className='smlogo'/>
            <AiOutlineTwitter className='smlogo'/>
            <AiFillYoutube className='smlogo'/>
            <BsWhatsapp className='smlogo'/>
        </div>
        <div>
            <img src="images/ph.png" alt="" style={{width:'25%'}}/>
        </div>
        <small className='cplogo mt-4'>Copyright <BiCopyright/>2021 zekon development. </small>
        <small className='cplogo pb-3'>All rights reserved.</small>
      </div>
    );
    
}