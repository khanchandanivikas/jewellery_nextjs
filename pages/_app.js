import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import NextNprogress from "nextjs-progressbar";
import Layout from "../components/layouts/Layout";
import "../scss/main.scss";
import { Provider } from "react-redux";
import { store, persistor } from "../store";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NextNprogress
          color="#775A4C"
          startPosition={0.3}
          stopDelayMs={300}
          height={2}
          showOnShallow={true}
          options={{ showSpinner: false }}
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
