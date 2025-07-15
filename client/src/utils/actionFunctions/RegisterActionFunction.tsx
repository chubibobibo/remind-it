import { toast } from "react-toastify";
import { isAxiosError } from "axios";
import axios from "axios";
import { redirect } from "react-router-dom";

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData(); //obtains form data from the request

  const password1 = formData.get("password1");
  const password2 = formData.get("password2");

  // Verify 2 passwords are the same
  if (password1 === password2) {
    formData.set("password", password1 as string);
    const data = Object.fromEntries(formData); // converts data into useAble objects
    try {
      await axios.post("/api/user/register", data);
      toast.success("User successfully registered");
      return redirect("/login");
    } catch (err) {
      if (isAxiosError(err)) {
        console.log(err);
        toast.error(
          Array.isArray(err)
            ? err?.response?.data?.message[0]
            : err?.response?.data?.message
        );
        return redirect("/login");
      }
    }
  } else {
    toast.error("Passwords do not match");
  }
};
