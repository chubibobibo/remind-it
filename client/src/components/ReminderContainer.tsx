import { MdOutlineTimer, MdOutlineSubtitles } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";

function ReminderContainer() {
  return (
    <>
      <section className='reminder-container p-2 gap-1'>
        <section className='flex items-center gap-2'>
          <MdOutlineSubtitles />
          <h1>Reminder 1</h1>
        </section>
        <section className='flex items-center gap-2'>
          <IoDocumentTextOutline />
          <p>This is a reminder</p>
        </section>
        <section className='flex items-center gap-2'>
          {<MdOutlineTimer />}
          <p>Sunday, 11 may 2025</p>
        </section>
      </section>
    </>
  );
}
export default ReminderContainer;
