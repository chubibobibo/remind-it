import TextInput from "./TextInput";

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
          <section className='flex flex-col items-center'>
            <TextInput icon={"user"} />
          </section>
        </div>
      </dialog>
    </>
  );
}
export default AuthModal;
