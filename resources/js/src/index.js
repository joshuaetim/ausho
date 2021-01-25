import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "react-query";

import Apps from "./apps";
import { store, persistor } from "./store";

const App = () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        staleTime: Infinity,
        cacheTime: Infinity,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false
      }
    }
  });

  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <QueryClientProvider client={client}>
            <Apps />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
};

if (document.getElementById("root")) {
  ReactDOM.render(<App />, document.getElementById("root"));
}
