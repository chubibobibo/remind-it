import { useLoggedUser } from "../hooks/useLoggedUser";
import { useEffect } from "react";

function ProfilePage() {
  const { getLoggedUser, loggedUser } = useLoggedUser();
  useEffect(() => {
    getLoggedUser();
  }, []);

  //   console.log(loggedUser);

  return (
    <div className='flex h-screen p-2'>
      <div className='card bg-base-100 w-96 shadow-sm h-9/12'>
        <figure className='px-10 pt-10'>
          <img
            src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
            alt='Shoes'
            className='rounded-xl'
          />
        </figure>
        <div className='card-body items-center text-center'>
          <h2 className='card-title capitalize'>{loggedUser?.username}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className='card-actions'>
            <button className='btn btn-primary'>Update Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfilePage;
