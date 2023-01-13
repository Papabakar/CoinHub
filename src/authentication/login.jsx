import React, { useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import { auth, logInWithEmailAndPassword} from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";


function DashboardLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) redirect("/dashboard");
  }, [user, loading]);
  return (
    <div className="flex justify-center items-center">

<div className="p-7 sm:min-w-[400px] border border-lightBorder fixed min-w-[300px] xs:min-w-[375px] top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 z-[100] rounded-2xl backdrop-blur-3xl border-opacity-30 flex flex-col gap-5">
        <div className="text-gray-400 flex flex-col gap-1">
            <span className="text-white font-bold text-2xl">Login</span>
            <span>Admin Dashboard</span> 
        </div>

        <div className="flex flex-col gap-2">
                <input
                  type="text"
                  className=" bg-transparent text-gray-400 border border-lightBorder border-opacity-30 appearance-none rounded-lg px-3 w-full hover:border-2 hover:border-btn-hvr focus:outline-none py-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail Address"
                />
                
                <input
                  type="password"
                  className=" bg-transparent text-gray-400 border border-lightBorder border-opacity-30 appearance-none rounded-lg px-3 w-full hover:border-2 hover:border-btn-hvr focus:outline-none py-3"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
        </div>

        <button className="primary w-full text-white py-3"
        onClick={() => logInWithEmailAndPassword(email, password)}
        >
            Login
          </button>
      </div>
    </div>
  );
}
export default DashboardLogin;