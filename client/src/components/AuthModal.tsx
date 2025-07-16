import TextInput from "./TextInput";
import { Form } from "react-router-dom";
import { ToastContainer } from "react-toastify";

interface ModalNameType {
  modalName: string;
}

function AuthModal({ modalName }: ModalNameType) {
  return (
    <>
      <dialog id={modalName} className='modal'>
        <div className='modal-box bg-blue-100'>
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
              ✕
            </button>
          </form>
          <h3 className='font-bold text-lg'>Login</h3>
          {/* <p className='py-4'>Press ESC key or click on ✕ button to close</p> */}
          {/* INPUT FIELDS */}
          <Form method='POST'>
            <section className='flex flex-col items-center gap-2'>
              {modalName === "login_modal" ? (
                <>
                  <TextInput
                    icon={"user"}
                    label={"Username"}
                    name={"username"}
                    type={"text"}
                  />
                  <TextInput
                    icon={"password"}
                    label={"Password"}
                    name={"password"}
                    type={"password"}
                  />
                  <button
                    className='btn btn-success'
                    type='submit'
                    value={"loginForm"}
                    name='formId'
                  >
                    Login
                  </button>
                </>
              ) : (
                <>
                  <TextInput
                    icon={"user"}
                    label={"Username"}
                    name={"username"}
                    type={"text"}
                  />
                  <TextInput
                    icon={"user"}
                    label={"First Name"}
                    name={"firstName"}
                    type={"text"}
                  />
                  <TextInput
                    icon={"user"}
                    label={"Last Name"}
                    name={"lastName"}
                    type={"text"}
                  />
                  <TextInput
                    icon={"email"}
                    label={"Email"}
                    name={"email"}
                    type={"email"}
                  />
                  <TextInput
                    icon={"password"}
                    label={"Password"}
                    name={"password1"}
                    type={"password"}
                  />
                  <TextInput
                    icon={"password"}
                    label={"Re-enter your password"}
                    name={"password2"}
                    type={"password"}
                  />
                  <button
                    className='btn btn-success'
                    type='submit'
                    value={"registerForm"}
                    name='formId'
                  >
                    Register
                  </button>
                </>
              )}
            </section>
            <ToastContainer className='absolute z-100' />
          </Form>
        </div>
      </dialog>
    </>
  );
}
export default AuthModal;
