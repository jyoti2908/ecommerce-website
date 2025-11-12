import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
    const [userFirstName, setUserFirstName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userNumber, setUserNumber] = useState("");
    const [userAddress, setUserAddress] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPass, setUserPass] = useState("");
    const navigate = useNavigate(); // Hook to redirect

    function handleSignUp() {
        if (!userFirstName) {
            alert("Enter your Firstname");
        } else if (!userLastName) {
            alert('Enter your Lastname')
        } else if (userNumber.length !== 10) {
            alert('Contact number should be of 10 digits')
        } else if (!userAddress) {
            alert('Address field is required')
        } else if (!userEmail.endsWith("@gmail.com")) {
            alert('Only gmail addresses are accepted (@gmail.com)')
        } else if (userPass.length < 4) {
            alert("Create strong Password minimum of 8 characters")
        } else {
            setTimeout(() => {
                setUserFirstName('')
                setUserLastName('')
                setUserNumber('')
                setUserAddress('')
                setUserEmail('')
                setUserPass('')
                navigate('/');
            }, 1000)
        }
    }
    return (
        <div className="w-auto md:pt-6 pt-2 h-auto mx-auto pb-16 bg-cover bg-center"
            style={{ backgroundImage: "url('loginpage.avif')" }}>
            <div className="bg-white md:mx-60 mx-6 flex md:flex-row flex-col items-center justify-center md:gap-8 gap-4 rounded-xl">
                <div className="mx-6 md:mx-0">
                    <form className="py-6">
                        <h1 className="text-gray-600">Sign Up</h1>
                        <h2 className="text-gray-500 text-xs">Let's start with some facts about you</h2>
                        <br />
                        <div className="flex gap-4">
                            <input className="w-full px-2 py-2 border-[1px] border-[#20B2AA] rounded text-xs" type='text' placeholder='Firstname' value={userFirstName} title='Firstname should be in Capital only' onChange={(e) => setUserFirstName(e.target.value)} />
                            <input className="w-full px-2 py-2 border-[1px] border-[#20B2AA] rounded text-xs" type='text' placeholder='Lastname' value={userLastName} title='Lastname should be in capital only' onChange={(e) => setUserLastName(e.target.value)} />
                        </div>
                        
                        <div className="mt-4">
                            <input className="w-full px-2 py-2 border-[1px] border-[#20B2AA] rounded text-xs" type='contact' placeholder='Contact No' value={userNumber} onChange={(e) => setUserNumber(e.target.value)} />
                        </div>
                      
                        <div className="mt-4">
                            <input className="w-full px-2 py-2 border-[1px] border-[#20B2AA] rounded text-xs" type='text' placeholder='Location' value={userAddress} onChange={(e) => setUserAddress(e.target.value)} />
                        </div>
                       
                        <div className="mt-4">
                            <input className="w-full px-2 py-2 border-[1px] border-[#20B2AA] rounded text-xs" type='text' placeholder='Email' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                        </div>
                      
                        <div className="mt-4">
                            <input className="w-full px-2 py-2 border-[1px] border-[#20B2AA] rounded text-xs" type='password' placeholder='Password' value={userPass} onChange={(e) => setUserPass(e.target.value)} />
                        </div>
                    </form>
                    <div className="w-full flex justify-center mt-2">
                        <button className="w-full px-2 py-2 rounded-full text-sm text-white bg-orange-600 hover:bg-orange-500 hover:text-white" onClick={() => handleSignUp()}>Submit</button>
                    </div>
                    <div className="mb-6">
                        <h4 className="text-gray-800 text-xs mt-2">Already have an account.<Link to="/login" ><span className="text-red-500 hover:text-red-900 text-xs"> Sign in</span></Link></h4>
                    </div>
                </div>
                <div className="px-4 md:px-0">
                    <img src="sign.jpg" alt="shopping image" className="rounded-xl w-full h-full md:h-[400px] mb-6 md:mb-0" />
                </div>
            </div>
        </div>
    )
}
export default SignUp;
