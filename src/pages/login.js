import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../App.css';

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
        <div className="w-screen px-4 py-4 mx-auto h-auto ">
            <div className="md:mt-12 mt-6 md:ml-96 rounded-lg md:h-[300px] md:w-[504px] bg-blue-200 py-4 px-2">
                <form>
                    <label className="md:ml-5"> Username: </label>
                    <input className="mt-8 ml-4 h-8 md:w-[340px] rounded-md text-center" type='text' placeholder='Username' value={userName}
                        title='Username can be your Email or Phone Number'
                        onChange={(e) => (setUserName(e.target.value))} />
                    <br />
                    <label className="md:ml-6"> Password: </label>
                    <input className="mt-8 md:ml-4  ml-6 h-8 md:w-[340px] rounded-md text-center" type='password' placeholder='Password' value={userPassword} onChange={(e) => (setUserPassword(e.target.value))} />
                </form>
                <br></br>
                {showMessage && <div className="text-center text-green-400 text-lg font-serif"><b>Login successful!</b></div>}
                <br />
                <button className="h-8 w-[70px] rounded-full bg-blue-400 hover:bg-blue-800 hover:text-white" onClick={() => handleFormSubmit()}>Submit</button>

                <h2 className="text-center mt-4">If not registered already, kindly <Link to="/signup" className="text-red-500 hover:text-red-900">SignUp !</Link></h2>
            </div>
        </div>
    )
}
export default Login;