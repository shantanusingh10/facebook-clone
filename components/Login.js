import Image from "next/image";
import { signIn } from "next-auth/react";
import PrivacyPolicy from "./PrivacyPolicy";
("next-auth/client");

const Login = () => {
  return (
    // <div className="flex flex-col items-center mt-8">
    //   <Image
    //     src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"
    //     width={200}
    //     height={200}
    //   />
    //   <a
    //     onClick={signIn}
    //     className="p-4 mt-6 cursor-pointer bg-blue-500 rounded-full text-white">
    //     Login with Facebook
    //   </a>
    // </div>
    <div className="flex flex-col items-center mx-auto">
      <Image
        className="p-10 m-10"
        src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-Logo-Meaning.jpg"
        height={240}
        alt="image"
        width={240}
      />
      <a
        onClick={signIn}
        className="px-20 py-4 z-10 text-2xl cursor-pointer -mt-16 bg-blue-500 rounded-md text-white">
        Login
      </a>

      {/* <PrivacyPolicy/> */}
    </div>
  );
};

export default Login;