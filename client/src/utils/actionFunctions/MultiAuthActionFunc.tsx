import axios from "axios";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

/** @multiAuthActionFunc function that implements 2 actions (login and registering) depending on the @formId of the button (logging in or registering) */
/** @error in toast.error checks whether message exists in data then check if message is an array. If message doesn't exist in data use the error in data */

export const multiAuthActionFunc = async ({
  request,
}: {
  request: Request;
}) => {
  const formData = await request.formData(); // obtains data from forms
  const formId = formData.get("formId"); //obtain value (loginForm/registerForm to differentiate between 2 actions)
  //   console.log(formId);

  /** Logic for login */
  if (formId === "loginForm") {
    const data = Object.fromEntries(formData);
    try {
      await axios.post("/api/user/login", data);
      toast.success("User successfully logged in");
      return redirect("/dashboard/home");
    } catch (err) {
      console.log(err);
      if (axios.isAxiosError(err)) {
        toast.error(
          err?.response?.data?.message
            ? Array.isArray(err?.response?.data?.message)
              ? err?.response?.data?.message[0]
              : err?.response?.data?.message
            : err?.response?.data
        );
      }
    }
  }

  /**Logic for registering */
  if (formId === "registerForm") {
    const password1 = formData.get("password1");
    const password2 = formData.get("password2");

    if (password1 !== password2) {
      toast.error("Passwords do not match");
    } else {
      formData.set("password", password1 as string);
      try {
        const data = Object.fromEntries(formData);
        // console.log(data);
        await axios.post("/api/user/register", data);
        toast.success("User successfully registered");
        const newUsername = formData.get("username");
        const newPassword = formData.get("password");
        const newUser = { username: newUsername, password: newPassword };
        await axios.post("/api/user/login", newUser);
        return redirect("/dashboard/home");
      } catch (err) {
        console.log(err);
        if (axios.isAxiosError(err)) {
          toast.error(
            err?.response?.data?.message
              ? Array.isArray(err?.response?.data?.message)
                ? err?.response?.data?.message[0]
                : err?.response?.data?.message
              : err?.response?.data
          );
        }
      }
    }
  }
};
