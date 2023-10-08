import { useState } from "react";
// import { useRouter } from 'next/navigation';
// import Cookies from 'js-cookie';
// import { login } from '@/app/services/login';

export const LoginForm = () => {
  // const router = useRouter();

  const onSubmit = () => {
    // const cookieName = 'myTokenName'
    // Cookies.set(cookieName, 'prueba')
    // router.push('/dashboard')
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
      {/* Submit button */}
      {/* <button type="submit">ok</button>
            <a
                href="#!"
                className="text-center text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 light:text-primary-400 light:hover:text-primary-500 light:focus:text-primary-500 light:active:text-primary-600"
            >
                Forgot password?
            </a> */}
      <button
        className={[
          "bg-[#1266f1] storybook-button",
          `storybook-button--`,
          `inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm 
            font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] 
            transition duration-150 ease-in-out hover:bg-[#1266f1]  
            hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
            focus:bg-[#1266f1] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
            focus:outline-none focus:ring-0 active:bg-primary-700 
            active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
            light:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] 
            light:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
            light:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)`,
        ]}
        // backgroundColor="#1266f1"
        label="Ingresar"
        onClick={onSubmit}
      >
        {"dewdefinition"}
      </button>
    </form>
  );
};
