import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSelected = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);

  const {
    data: selected = [],
    isLoading,
    refetch,
  } = useQuery({
    // queryKey: ["selected", user?.email],
    // why use "selected1" instead of "selected" ------my question
    queryKey: ["selected1", user?.email],

    enabled:
      !!user?.email,

    queryFn: async () => {
      const res = await axiosSecure(`/selected?email=${user?.email}`);
      // console.log('res from axios', res)

      return res.data;
    },
  });
  return [selected, isLoading, refetch];
};

export default useSelected;
