import { create } from "zustand";
import axios from "axios";

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
      console.log(loggedUser);
    } catch (err) {
      console.log(err);
    }
  },
}));
