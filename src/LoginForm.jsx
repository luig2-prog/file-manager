import { useState } from "react";
import PropTypes from "prop-types";
import ButtonComponent from "./components/ButtonComponent";
import { RiRadioButtonLine } from "react-icons/ri";

// import { useRouter } from 'next/navigation';
// import Cookies from 'js-cookie';
// import { login } from '@/app/services/login';

export const LoginForm = ({ title }) => {
  console.log("🚀 ~ file: LoginForm.jsx:7 ~ LoginForm ~ title:", title);
  // const router = useRouter();
  const onSubmit = async () => {
    const fetchData = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonData = await fetchData.json();
    console.log("🚀 ~ file: LoginForm.jsx:16 ~ onSubmit ~ jsonData:", jsonData);
  };

  const [usernameLogin, setUsernameLogin] = useState("");
  console.log(
    "🚀 ~ file: LoginForm.jsx:17 ~ LoginForm ~ usernameLogin:",
    usernameLogin
  );
  const [passwordLogin, setPasswordLogin] = useState("");
  console.log(
    "🚀 ~ file: LoginForm.jsx:19 ~ LoginForm ~ passwordLogin:",
    passwordLogin
  );

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // const data = await login(usernameLogin, passwordLogin);
      // const cookieName = 'myTokenName';
      // Cookies.set(cookieName, 'prueba');
      // router.push('/dashboard');
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      // Se puede manejar el error de inicio de sesión aquí y mostrar un mensaje al usuario.
    }
  };

  const handleUsernameChange = (e) => {
    setUsernameLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordLogin(e.target.value);
  };

  return (
    <form onSubmit={handleLogin}>
      {/* Email input */}
      <div className="relative mb-6" data-te-input-wrapper-init="">
        <input
          type="text"
          className="focus:border-[#1266f1] peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 
                        py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 
                        ease-linear focus:placeholder:opacity-0 
                        data-[te-input-state-active]:placeholder:opacity-100 
                        motion-reduce:transition-none light:text-neutral-200 
                        light:placeholder:text-neutral-200 
                        [&:not([data-te-input-placeholder-active])]:placeholder:opacity-100"
          id="exampleFormControlInput3"
          placeholder="Email address"
          onChange={handleUsernameChange}
        />
      </div>
      {/* Password input */}
      <div className="relative mb-6" data-te-input-wrapper-init="">
        <input
          type="password"
          className="focus:border-[#1266f1] peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 
                    py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 
                    ease-linear focus:placeholder:opacity-0 
                    data-[te-input-state-active]:placeholder:opacity-100 
                    motion-reduce:transition-none light:text-neutral-200 
                    light:placeholder:text-neutral-200 
                    [&:not([data-te-input-placeholder-active])]:placeholder:opacity-100"
          id="exampleFormControlInput33"
          placeholder="Password"
          onChange={handlePasswordChange}
        />
      </div>
      <ButtonComponent text="Ingresar" functionComponent={onSubmit}>
        <RiRadioButtonLine />
      </ButtonComponent>
    </form>
  );
};
/**
 * PropTypes
 */
LoginForm.propTypes = {
  title: PropTypes.string,
};
