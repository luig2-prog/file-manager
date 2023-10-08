
export default function FigmaComponent() {
    return (
        <div className="w-full h-screen px-6 py-24">
            <div className="g-6 flex h-full flex-wrap items-center justify-center">
                <div className="flex justify-center md:mb-0 md:w-8/12 lg:w-6/12">
                    <img className="w-1/2" src="/public/login.png" />
                </div>

                <div className="md:w-8/12 h-1/2 lg:w-5/12 block rounded-lg bg-white p-8 
            shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                    <form
                    // onSubmit={handleLogin}
                    >
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
                            // onChange={handleUsernameChange}
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
                            // onChange={handlePasswordChange}
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
                            // backgroundColor="#1266f1"
                            label="Ingresar"
                        // onClick={onSubmit}
                        />
                    </form>
                </div>
            </div>
        </div>

    )
}