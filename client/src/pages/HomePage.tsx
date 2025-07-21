import ReminderContainer from "../components/ReminderContainer";

function HomePage() {
  return (
    <>
      <section className='flex flex-col items-center justify-center pt-7 gap-4 h-screen'>
        <h1 className='title-text-mobile text-gray-600'>Reminder-IT</h1>
        <section className='landing-card-mobile pt-4 w-11/12 h-screen mb-5 bg-blue-300 rounded-sm'>
          <ReminderContainer />
          <ReminderContainer />
          <ReminderContainer />
          <ReminderContainer />
        </section>
      </section>
    </>
  );
}
export default HomePage;
