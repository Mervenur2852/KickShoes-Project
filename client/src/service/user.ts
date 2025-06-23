import { useQuery } from "@tanstack/react-query";
import { authService } from "./auth";
const useUser = () => {
 const {data, isLoading, error} =  useQuery({
        queryKey: ["user"],
        queryFn: () => authService.getMe(),
        select: (data) => data.data.user,
        retry: false,
    })
    return {user:data, isLoading, error}
}

export default useUser;