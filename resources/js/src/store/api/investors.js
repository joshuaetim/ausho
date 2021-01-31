import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "react-query";

async function createInvestor(values) {
  return await axios.get("/sanctum/csrf-cookie").then(async () => {
    return await axios
      .post("/api/investors", values)
      .then(res => res.data)
      .catch(error => {
        throw error.response.data;
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
      .then(res => res.data.data)
      .catch(error => {
        throw error;
      });
  });
}

export function useFetchAllInvestors() {
  return useQuery("investors", fetchAllInvestors);
}

export function useFetchInvestor(slug) {
  const queryClient = useQueryClient();

  return useQuery(["investor", slug], () => fetchInvestor(slug), {
    enabled: false,
    onSuccess: async data => {
      const investors = [data?.data];
      await queryClient.setQueryData("investors", investors);
      queryClient.removeQueries("investors");
    }
  });
}

export function useUpdateInvestor(slug) {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return useMutation(updateInvestor, {
    onError: error => dispatch({ type: "ERROR", error }),
    onSuccess: async data => {
      dispatch({ type: "SUCCESS", data });

      const investors = queryClient.getQueryData("investors");
      if (!investors?.length) return;

      const elementIndex = investors?.findIndex(el => el?.slug === slug);
      investors[elementIndex] = data?.data;

      await queryClient.setQueryData("investors", investors);
    }
  });
}

export function useDeleteInvestor(slug) {
  const history = useHistory();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return useMutation(deleteInvestor, {
    onError: error => dispatch({ type: "ERROR", error }),
    onSuccess: async data => {
      dispatch({ type: "SUCCESS", data });
      history.push("/investors");

      const investors = queryClient.getQueryData("investors");
      if (!investors?.length) return;

      const update = investors?.filter(item => item.slug !== slug);
      await queryClient.setQueryData("investors", update);
    }
  });
}

export function useCreateInvestor() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return useMutation(createInvestor, {
    onError: error => dispatch({ type: "ERROR", error }),
    onSuccess: data => {
      dispatch({ type: "SUCCESS", data });

      let investors = queryClient.getQueryData("investors");

      if (!investors) {
        return queryClient.setQueryData("investors", [data.data]);
      }

      investors.push(data.data);
      queryClient.setQueryData("investors", investors);
    }
  });
}
