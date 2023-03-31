import { store } from "./app/store";
const { Provider } = ReactRedux;
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
