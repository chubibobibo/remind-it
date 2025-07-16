// import { ActionFunction } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData(); // Obtains data from forms
  const data = Object.fromEntries(formData); // Converts data into useable object
  try {
    await axios.post("/api/user/login", data);
    toast.success("User Logged in");
    return redirect("/login");
  } catch (err) {
    console.log(err);
    if (axios.isAxiosError(err)) {
      toast.error(
        Array.isArray(err?.response?.data?.message)
          ? err?.response?.data?.message[0]
          : err?.response?.data.message
      );
      // return redirect("/");
    }
  }
};
