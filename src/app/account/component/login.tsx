"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2"; // Import SweetAlert
import withReactContent from "sweetalert2-react-content"; // Import withReactContent

const MySwal = withReactContent(Swal); // Initialize SweetAlert with React support

const Login = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [registerEmail, setRegisterEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user is already logged in from localStorage
    const loggedInUser = localStorage.getItem("isLoggedIn");
    if (loggedInUser) {
      setIsLoggedIn(true);
    }
  }, []);

  // const handleLoginChange = (e: { target: { name: any; value: any; }; }) => {
  //   const { name, value } = e.target;
  //   setLoginData((prevState) => ({ ...prevState, [name]: value }));
  // };
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({ ...prevState, [name]: value }));
  };
  
  const handleRegisterChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setRegisterEmail(e.target.value);
  };

  const handleRememberMe = (e: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setRememberMe(e.target.checked);
  };

  const handleLoginSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (loginData.username && loginData.password) {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);

      // Show SweetAlert success notification
      MySwal.fire({
        title: "Login Successful!",
        text: "You are now logged in.",
        icon: "success",
        confirmButtonText: "OK",
        position: "center",
      }).then(() => {
        router.push("/shop");
      });
    } else {
      alert("Please enter valid credentials.");
    }
  };

  const handleRegisterSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert(`Registering with Email: ${registerEmail}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    alert("Logged Out Successfully!");
    router.push("/account");
  };

  return (
    <div className="flex justify-center items-center w-full h-auto bg-[#FFFFFF] p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#FFFFFF] w-full max-w-6xl h-auto shadow-sm rounded-lg overflow-hidden">
        {/* Log In Section */}
        <div className="p-6 sm:p-8 w-full h-auto">
          <h2 className="text-3xl sm:text-[36px] font-semibold mb-6">{isLoggedIn ? "Welcome!" : "Log In"}</h2>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="w-full sm:w-[215px] h-[50px] sm:h-[64px] text-center py-2 border-2 border-black rounded-2xl font-normal text-lg sm:text-[20px] hover:bg-gray-800 hover:text-white transition-colors"
            >
              Logout
            </button>
          ) : (
            <form className="space-y-4" onSubmit={handleLoginSubmit}>
              <div>
                <label className="block text-base font-medium text-black">Username or email address</label>
                <input
                  type="text"
                  name="username"
                  value={loginData.username}
                  onChange={handleLoginChange}
                  className="mt-1 block p-2 border border-[#9F9F9F] rounded-xl focus:outline-none focus:ring-[#9F9F9F] w-full h-[50px] sm:h-[75px]"
                />
              </div>
              <div>
                <label className="block text-base font-medium text-black">Password</label>
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  className="mt-1 block p-2 border border-[#9F9F9F] rounded-xl focus:outline-none focus:ring-[#9F9F9F] w-full h-[50px] sm:h-[75px]"
                />
              </div>
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleRememberMe}
                  className="w-5 h-5"
                />
                <label htmlFor="remember" className="ml-2 text-base text-black">
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="w-full sm:w-[215px] h-[50px] sm:h-[64px] text-center py-2 border-2 border-black rounded-2xl font-normal text-lg sm:text-[20px] hover:bg-gray-800 hover:text-white transition-colors"
              >
                Log In
              </button>
            </form>
          )}
          <div className="text-sm text-gray-500 text-center mt-4">
            <a href="#" className="hover:underline">Lost Your Password?</a>
          </div>
        </div>

        {/* Register Section */}
        <div className="bg-[#FFFFFF] p-6 sm:p-12 w-full h-auto">
          <h2 className="text-3xl sm:text-[36px] font-semibold mb-6">Register</h2>
          <form className="space-y-4" onSubmit={handleRegisterSubmit}>
            <div>
              <label className="block text-base font-medium text-black">Email address</label>
              <input
                type="email"
                value={registerEmail}
                onChange={handleRegisterChange}
                className="mt-1 block p-2 border border-[#9F9F9F] rounded-xl focus:outline-none focus:ring-[#9F9F9F] w-full h-[50px] sm:h-[75px]"
              />
            </div>
            <p className="text-sm text-black mt-2">
              A link to set a new password will be sent to your email address.
            </p>
            <p className="text-sm text-black mt-2">
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <strong className="font-semibold">privacy policy</strong>.
            </p>
            <button
              type="submit"
              className="w-full sm:w-[215px] h-[50px] sm:h-[64px] text-center py-2 border-2 border-black rounded-2xl font-normal text-lg sm:text-[20px] hover:bg-gray-800 hover:text-white transition-colors mt-4"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;


