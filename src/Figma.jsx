import { LoginForm } from "./LoginForm";

export default function FigmaComponent() {
    return (
        <section className="h-screen">
        <div className="h-full w-full px-6 py-24">
          <div className="g-6 flex h-full flex-wrap items-center justify-center">
            <div className="flex justify-center md:mb-0 md:w-8/12 lg:w-6/12">
              <img
                src="/public/login.png"
                className="w-1/2"
                alt="Phone image"
              />
            </div>
            <div className="md:w-8/12 h-1/2 lg:w-5/12 block rounded-lg bg-white p-8 
              shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
              <LoginForm />
            </div>
          </div>
        </div >
      </section >

    )
}