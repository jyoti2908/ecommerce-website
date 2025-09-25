import { FaFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

function Footer() {
    return (
        <div className="h-14 bg-gray-700 p-2 text-white fixed bottom-0 left-0 right-0 z-50">
            <div className="flex flex-row justify-center gap-1">
               <a href ="https://www.facebook.com/"><FaFacebook/></a>
               <a href="https://x.com/"> <FaTwitterSquare /></a>
               <a href ="https://in.linkedin.com/"><FaLinkedin/></a>
               <a href="https://www.gmail.com/"><BiLogoGmail/></a>
               <a href ="https://www.instagram.com/"><FaSquareInstagram/></a>
            </div>
            <div className="mt-3 h-5 text-white text-xs text-center">
                <p>Designed by @Jyoti Patel. All rights reserved.</p>
            </div>
        </div>
    )
}
export default Footer;