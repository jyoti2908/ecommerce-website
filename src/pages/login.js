import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../App.css';
import { FaFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaSquareInstagram } from "react-icons/fa6";

function Login() {
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const navigate = useNavigate(); // Hook to redirect
    // ________________________________________________________
    function handleFormSubmit() {
        if (!userName) {
            alert("Please enter a valid username");
        } else if (userPassword.length < 4) {
            alert("Password should be a minimum of 4 characters");
        } else {
            fetchData();
        }
    }
    // ____________________________________________________
    async function fetchData() {
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: 'emilys',
                    password: 'emilyspass',
                    expiresInMins: 30,
                }),

            })
            const data = await response.json();
            console.log('Fetched data:', data);

            if (response.ok) {
                localStorage.setItem('accessToken', data.token);
                setShowMessage(true);
                setTimeout(() => {
                    setShowMessage(false);
                    setUserName('');
                    setUserPassword('');
                    navigate('/');
                }, 1000);
            } else {
                alert(data.message || 'Login failed');
            }
        } catch (error) {
            console.log("Fetched error:", error)
        }
    }
    // _________________________________________________________
    return (
        <div className="w-auto md:pt-12 pt-2 h-screen mx-auto pb-16 bg-cover bg-center"
          style={{ backgroundImage: "url('loginpage.avif')" }}>
            <div className="bg-white md:mx-72 mx-6 flex md:flex-row flex-col items-center justify-center md:gap-8 gap-4 rounded-xl">
                <div className="py-4 px-4 md:px-0">
                    <img src="login.jpg" alt="shopping image" className="md:h-108 md:w-72 rounded-xl " />
                </div>
                <div className="mx-6 md:mx-0">                 
                    <form>
                        <h1 className="text-gray-600">Log in</h1>
                        <h2 className="text-gray-500 text-xs">Not a member yet? <Link to="/signup" ><span className="text-red-500 hover:text-red-900 text-xs">Register now</span></Link></h2>
                        <br />
                        <input className="mb-4 w-full px-2 py-2 border-[1px] border-gray-300 rounded-full text-xs" type='text' placeholder='Username' value={userName}
                            title='Username can be your Email or Phone Number'
                            onChange={(e) => (setUserName(e.target.value))} />
                        <input className="w-full px-2 py-2 border-[1px] border-gray-300 rounded-full text-xs" type='password' placeholder='Password' value={userPassword} onChange={(e) => (setUserPassword(e.target.value))} />
                        <br />
                        <input type="checkbox" className="mt-6"/>
                        <label className="ml-2 text-right text-gray-800 text-xs">Keep me logged in</label>
                    </form>
                    <br />
                    <div>
                        <button className="w-full px-2 py-2 rounded-full text-sm text-white bg-orange-600 hover:bg-orange-500 hover:text-white"
                            onClick={() => handleFormSubmit()}>SUBMIT</button>
                    </div>
                    <br />
                    <div>
                        <h3 className="text-right font-semibold text-gray-800 text-xs hover:text-red-500">Forgot your password?</h3>
                    </div>
                    <div>
                        <h4 className="text-gray-800 text-xs"> Or <span className="text-gray-500  hover:text-red-500">sign in with </span></h4>
                    </div>
                    <div className="flex flex-row gap-1 mt-6 mb-6 md:mb-0">
                        <a href="https://www.facebook.com/" className="text-gray-500 border-[1px] px-4 py-2 border-gray-200 rounded-full hover:bg-gray-400 hover:text-white">
                            <FaFacebook /></a>
                        <a href="https://x.com/" className="text-gray-500 border-[1px] px-4 py-2 border-gray-200 rounded-full hover:bg-gray-400 hover:text-white">
                            <FaTwitterSquare /></a>
                        <a href="https://www.gmail.com/" className="text-gray-500 border-[1px] px-4 py-2 border-gray-200 rounded-full hover:bg-gray-400 hover:text-white">
                            <BiLogoGmail /></a>
                        <a href="https://www.instagram.com/" className="text-gray-500 border-[1px] px-4 py-2 border-gray-200 rounded-full hover:bg-gray-400 hover:text-white">
                            <FaSquareInstagram /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;