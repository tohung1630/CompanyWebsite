import Router from "next/router";
import { Provider } from "react-redux";
import store from "../redux/store";

import DefaultLayout from "../layouts/DefaultLayout";

import "../styles/globals.css";
import "../styles/antd.scss"

const App = ({ Component, pageProps }) => {
  const Layout = Component.Layout || DefaultLayout;

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default App;
