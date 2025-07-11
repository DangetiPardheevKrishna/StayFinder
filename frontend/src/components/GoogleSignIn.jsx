// components/GoogleAuth.js
import { useEffect } from "react";
// import jwtDecode from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useContext } from "react";
import AppContext from "../context/AuthContext";

const GoogleAuth = () => {
  const navigate = useNavigate();
  const { setToken, backendUrl } = useContext(AppContext);

  useEffect(() => {
    /* global google */
    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleGoogleResponse,
    });
    console.log(
      "Google Client ID:",
      import.meta.env.REACT_APP_GOOGLE_CLIENT_ID
    );
    window.google.accounts.id.renderButton(
      document.getElementById("google-btn"),
      { theme: "outline", size: "large", width: "100%" }
    );
  }, []);

  const handleGoogleResponse = async (response) => {
    const token = response.credential;

    try {
      const { data } = await axios.post(`${backendUrl}/api/user/auth/google`, {
        token,
      });

      if (data.success) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        toast.success(data.message);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error("Google login failed");
    }
  };

  return <div id="google-btn" className="flex justify-center" />;
};

export default GoogleAuth;
