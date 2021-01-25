import { useDispatch } from "react-redux";
import { useQuery, useMutation } from "react-query";

async function createInvestor(values) {
  return await axios.get("/sanctum/csrf-cookie").then(async () => {
    return await axios
      .post("/api/investors", values)
      .then(res => res.data)
      .catch(error => {
        throw error;
      });
  });
}

async function fetchInvestor(slug) {
  return await axios.get("/sanctum/csrf-cookie").then(async () => {
    return await axios
      .get(`/api/investors/${slug}`)
      .then(res => res.data)
      .catch(error => {
        throw error;
      });
  });
}

async function updateInvestor(data) {
  return await axios.get("/sanctum/csrf-cookie").then(async () => {
    return await axios
      .put(`/api/investors/${data.slug}`, data.values)
      .then(res => res.data)
      .catch(error => {
        throw error;
      });
  });
}

async function deleteInvestor(slug) {
  return await axios.get("/sanctum/csrf-cookie").then(async () => {
    return await axios
      .delete(`/api/investors/${slug}`)
      .then(res => res.data)
      .catch(error => {
        throw error;
      });
  });
}

async function fetchAllInvestors() {
  return await axios.get("/sanctum/csrf-cookie").then(async () => {
    return await axios
      .get("/api/investors")
      .then(res => res.data)
      .catch(error => {
        throw error;
      });
  });
}

export function useFetchAllInvestors() {
  return useQuery("investors", fetchAllInvestors);
}

export function useFetchInvestor(slug) {
  return useQuery(["investor", slug], () => fetchInvestor(slug));
}

export function useUpdateInvestor() {
  const dispatch = useDispatch();

  return useMutation(updateInvestor, {
    onError: error => dispatch({ type: "ERROR", error }),
    onSuccess: data => dispatch({ type: "SUCCESS", data })
  });
}

export function useDeleteInvestor() {
  const dispatch = useDispatch();

  return useMutation(deleteInvestor, {
    onError: error => dispatch({ type: "ERROR", error }),
    onSuccess: data => dispatch({ type: "SUCCESS", data })
  });
}

export function useCreateInvestor() {
  const dispatch = useDispatch();

  return useMutation(createInvestor, {
    onError: error => dispatch({ type: "ERROR", error }),
    onSuccess: data => dispatch({ type: "SUCCESS", data })
  });
}
