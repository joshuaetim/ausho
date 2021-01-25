import { useDispatch } from "react-redux";
import { useQuery, useMutation } from "react-query";

async function register(values) {
  return await axios.get("/sanctum/csrf-cookie").then(async () => {
    return await axios
      .post("/register", values)
      .then(res => res.data)
      .catch(error => {
        throw error;
      });
  });
}

async function login(values) {
  return await axios.get("/sanctum/csrf-cookie").then(async () => {
    return await axios
      .post("/login", values)
      .then(res => res.data)
      .catch(error => {
        throw error;
      });
  });
}

export function useRegister() {
  const dispatch = useDispatch();

  return useMutation(register, {
    onError: error => dispatch({ type: "AUTH_ERROR", error }),
    onSuccess: data => dispatch({ type: "AUTH_SUCCESS", data })
  });
}

export function useLogin(data) {
  const dispatch = useDispatch();

  return useQuery("login", () => login(data), {
    enabled: false,
    onError: error => dispatch({ type: "AUTH_ERROR", error }),
    onSuccess: data => dispatch({ type: "AUTH_SUCCESS", data })
  });
}
