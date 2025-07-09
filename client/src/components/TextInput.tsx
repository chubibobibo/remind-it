// import { FaUser, FaKey } from "react-icons/fa";
import { iconsObject } from "../utils/iconObject";

/** @keyof @typeof ensures that the icon property is a key of the iconsObject object */
interface IconType {
  icon: keyof typeof iconsObject; // icon property must be one of the keys of iconsObject.
}

// const test = {
//   user: <FaUser />,
//   password: <FaKey />,
// };

function TextInput({ icon }: IconType) {
  return (
    <>
      <label className='input input-sm md:input-md pt-2 flex items-center justify-center'>
        {iconsObject[icon]}
        <input type='text' className='grow' placeholder='index.php' />
      </label>
    </>
  );
}
export default TextInput;
