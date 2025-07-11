// import { FaUser, FaKey } from "react-icons/fa";
import { iconsObject } from "../utils/iconObject";

/** @keyof @typeof ensures that the icon property is a key of the iconsObject object */
/** iconsObject object containing a value that refers to  icon component from react icons*/
interface IconType {
  icon: keyof typeof iconsObject; // icon property must be one of the keys of iconsObject.
  label: string;
  name: string;
}

function TextInput({ icon, label, name }: IconType) {
  return (
    <>
      <label className='input input-sm md:input-md pt-2 flex items-center justify-center'>
        {/* selecting the icon component using the iconsObject */}
        {iconsObject[icon]}
        <input type='text' className='grow' placeholder={label} name={name} />
      </label>
    </>
  );
}
export default TextInput;
