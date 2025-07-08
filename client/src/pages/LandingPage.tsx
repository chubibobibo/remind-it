import AuthModal from "../components/AuthModal";

function LandingPage() {
  return (
    <div className='w-screen'>
      <section className='bg-blue-200 flex w-screen'>
        <AuthModal modalName={"login_modal"} />
        <AuthModal modalName={"register_modal"} />
        <section className='w-screen h-screen flex justify-center items-center flex-col transform -translate-y-20'>
          <img
            src='../src/assets/note-logo.png'
            alt=''
            className='landing-logo-mobile sm: landing-logo'
          />
          <section className='landing-card-mobile md:landing-card flex flex-col items-center pt-25'>
            {/* <img
              src='../src/assets/Reminder-IT-logo.png'
              alt=''
              className='landing-logo-text'
            /> */}
            <h1 className='title-text-mobile text-gray-200 pt-5'>
              Reminder-IT
            </h1>
            <h3 className='title-subtext text-gray-600'>
              Scheduling Solutions
            </h3>
            <section className='flex gap-4 pt-15'>
              {/* LOGIN BUTTON */}
              <button
                className='btn btn-sm md:btn-md btn-primary w-20 md:w-40'
                onClick={
                  () =>
                    (
                      document.getElementById(
                        "login_modal"
                      ) as HTMLDialogElement
                    ).showModal() //casts the result of getElementById to HTMLDialogElement that contains the show modal method
                }
              >
                Login
              </button>
              {/* REGISTER BUTTON */}
              <button
                className='btn btn-sm md:btn-md btn-secondary w-20 md:w-40'
                onClick={
                  () =>
                    (
                      document.getElementById(
                        "register_modal"
                      ) as HTMLDialogElement
                    ).showModal() //casts the result of getElementById to HTMLDialogElement that contains the show modal method
                }
              >
                Register
              </button>
              {/* <button className='btn btn-sm md:btn-md btn-secondary w-20 md:w-40'>
                Register
              </button> */}
            </section>
          </section>
        </section>
      </section>
    </div>
  );
}
export default LandingPage;
