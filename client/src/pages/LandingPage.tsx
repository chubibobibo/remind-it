function LandingPage() {
  return (
    <>
      <section className='bg-blue-200 flex'>
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
          </section>
          <section>
            <button className='btn btn-secondary'>Button</button>
          </section>
        </section>
      </section>
    </>
  );
}
export default LandingPage;
