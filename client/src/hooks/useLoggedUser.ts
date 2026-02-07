import { create } from "zustand";
import axios from "axios";
import { toast } from "react-toastify";

interface LoggedUserType {
  getLoggedUser: () => void;
  loggedUser:
    | {
        username: string;
        firstName: string;
        lastName: string;
        email: string;
        role: string;
        _id: string;
      }
    | null
    | undefined;
}

export const useLoggedUser = create<LoggedUserType>((set) => ({
  loggedUser: null,

  getLoggedUser: async () => {
    try {
      const userData = await axios.get("/api/user/getLoggedUser");
      set({ loggedUser: userData.data });
    } catch (err) {
      console.log(err);
      if (axios.isAxiosError(err)) {
        toast.error(
          Array.isArray(err?.response?.data?.message)
            ? err?.response?.data?.message[0]
            : err?.response?.data?.message
        );
      }
    }
  },
}));
