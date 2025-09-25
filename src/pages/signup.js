import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [userFirstName, setUserFirstName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userNumber, setUserNumber] = useState("");
    const [userAddress, setUserAddress] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPass, setUserPass] = useState("");
    const [showMessage, setShowMessage] = useState(false);
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
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
                setUserFirstName('')
                setUserLastName('')
                setUserNumber('')
                setUserAddress('')
                setUserEmail('')
                setUserPass('')
                  navigate('/');
            }, 2000)
        }
    }
    return (
        <div className="ml-96 mt-24 rounded-lg h-[400px] w-[504px] bg-blue-200" >
            <form>
                <div>
                    <label className="ml-4"> Firstname: </label>
                    <input className="mt-8 ml-4 h-8 w-[340px] rounded-md text-center" type='text' placeholder='FirstName' value={userFirstName} title='Firstname should be in Capital only' onChange={(e) => setUserFirstName(e.target.value)} />
                </div>
                <div>
                    <label className="ml-4"> Lastname: </label>
                    <input className="mt-4 ml-4 h-8 w-[340px] rounded-md text-center" type='text' placeholder='LastName' value={userLastName} title='Lastname should be in capital only' onChange={(e) => setUserLastName(e.target.value)} />
                </div>
                <div>
                    <label className="ml-4"> Contact No: </label>
                    <input className="mt-4 ml-1 h-8 w-[340px] rounded-md text-center" type='number' placeholder='Contact No' value={userNumber} onChange={(e) => setUserNumber(e.target.value)} />
                </div>
                <div>
                    <label className="ml-4"> Address: </label>
                    <input className="mt-4 ml-7 h-8 w-[340px] rounded-md text-center" type='text' placeholder='Address' value={userAddress} onChange={(e) => setUserAddress(e.target.value)} />
                </div>
                <div>
                    <label className="ml-4"> Email: </label>
                    <input className="mt-4 ml-12 h-8 w-[340px] rounded-md text-center" type='text' placeholder='Email' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                </div>
                <div>
                    <label className="ml-4"> Password: </label>
                    <input className="mt-4 ml-4 h-8 w-[340px] rounded-md text-center" type='password' placeholder='Password' value={userPass} onChange={(e) => setUserPass(e.target.value)} />
                </div>
            </form>
            {showMessage && <div className="text-red-600 mt-2 ml-[180px] text-lg"><b>Signed Up Successfully!</b></div>}
            <br />
            <button className="ml-60 h-8 w-[70px] rounded-full bg-blue-400 hover:bg-blue-800 hover:text-white" onClick={() => handleSignUp()}>Submit</button>
        </div>
    )
}
export default SignUp;