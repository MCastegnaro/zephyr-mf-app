import { lazy } from "react";

import { Suspense } from "react";
import styles from "./App.module.css";
//@ts-expect-error - Remote
const RemoteButton = lazy(() => import("vite_remote_button/Button"));

//@ts-expect-error - Remote Header
const RemoteHeader = lazy(() => import("vite_remote_header/Header"));

//@ts-expect-error - Remote Footer
const RemoteFooter = lazy(() => import("vite_remote_footer/Footer"));

const RemoteProductList = lazy(
  //@ts-expect-error - vite_remote_product_list
  () => import("vite_remote_product_list/ProductList")
);

function App() {
  return (
    <main className={styles.root}>
      <h1>Module Federation App</h1>
      <div className="card">
        <p>
          This is a host app building with module federation and Zephyr cloud
          integration
        </p>
      </div>
      <Suspense fallback="Loading Header">
        <RemoteHeader />
      </Suspense>
      <div className={styles.container}>
        <Suspense fallback="Loading Button">
          <RemoteButton />
        </Suspense>
        <Suspense fallback="Loading ProductList">
          <RemoteProductList />
        </Suspense>
      </div>
      <Suspense fallback="Loading Footer">
        <RemoteFooter />
      </Suspense>
    </main>
  );
}

export default App;
