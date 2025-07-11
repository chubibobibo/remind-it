import AuthModal from "../components/AuthModal";
// import { action } from "../utils/LoginActionFunc";

// import { ActionFunction } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";

// export const action = async ({ request }) => {
//   const formData = await request.formData(); // Obtains data from forms
//   const data = Object.fromEntries(formData); // Converts data into useable object
//   try {
//     await axios.post("/api/user/login", data);
//     toast.success("User Logged in");
//   } catch (err) {
//     console.log(err);
//     if (axios.isAxiosError(err)) {
//       toast.error(
//         Array.isArray(err?.response?.data?.message)
//           ? err?.response?.data?.message[0]
//           : err?.response?.data.message
//       );
//     }
//   }
// };

function LandingPage() {
  return (
    <div className='w-screen'>
      <section className='flex w-screen'>
        <section className='w-screen h-screen flex justify-center items-center flex-col transform -translate-y-20'>
          <img
            src='../src/assets/note-logo.png'
            alt=''
            className='landing-logo-mobile sm: landing-logo'
          />
          <section className='landing-card-mobile md:landing-card flex flex-col items-center pt-25'>
            <h1 className='title-text-mobile text-gray-200 pt-5'>
              Reminder-IT
            </h1>
            <h3 className='title-subtext text-gray-600 pt-1'>
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
        <AuthModal modalName={"login_modal"} />
        <AuthModal modalName={"register_modal"} />
      </section>
    </div>
  );
}
export default LandingPage;
