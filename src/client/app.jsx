//
// This is the client side entry point for the React app.
//

import React from "react";
import { render, hydrate } from "react-dom";
import { routes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux'
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { renderRoutes } from "react-router-config";
import { loadableReady } from "@loadable/component";
import thunk from 'redux-thunk';

//
// PWA registration
//
import { notify } from "react-notify-toast";

//
// Add the client app start up code to a function as window.webappStart.
// The webapp's full HTML will check and call it once the js-content
// DOM is created.
require.ensure(
  ["./sw-registration"],
  require => {
    require("./sw-registration")(notify);
  },
  "sw-registration"
);
//

//
// Redux configure store with Hot Module Reload
//
const configureStore = initialState => {
  console.log('initialState', initialState);
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk)
  );

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      const nextRootReducer = require("./reducers").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export const store = configureStore(window.__PRELOADED_STATE__);

const start = App => {
  const jsContent = document.querySelector(".js-content");
  const reactStart = window.__PRELOADED_STATE__ && jsContent.innerHTML ? hydrate : render;

  loadableReady(() => {
    console.log('store', store);
    return reactStart(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
      jsContent
    )
  });
};

window.webappStart = () => start(() => renderRoutes(routes));

//
// Hot Module Reload setup
//
if (module.hot) {
  module.hot.accept("./routes", () => {
    const r = require("./routes");
    start(() => renderRoutes(r.routes));
  });
}
