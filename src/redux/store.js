import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./estateItems/filters";
import { ItemsReducer } from "./estateItems/slice";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { combineReducers, createStore } from "redux";

export const store = configureStore({
  reducer: {
    items: ItemsReducer,
    filters: filtersReducer,
  },
});

// const enhancer = devToolsEnhancer();

// export const store = configureStore({
//   reducer: {
//     objects: ItemsReducer,
//     filters: filtersReducer,
//   },
//     enhancers: enhancer,
// });

// const rootReducer = combineReducers({
//   objects: ItemsReducer,
//   filters: filtersReducer,
// });

// export const store = createStore(rootReducer, enhancer);

// import { configureStore } from "@reduxjs/toolkit";
// // import {
// //   persistStore,
// //   persistReducer,
// //   FLUSH,
// //   REHYDRATE,
// //   PAUSE,
// //   PERSIST,
// //   PURGE,
// //   REGISTER,
// // } from "redux-persist";
// // import storage from "redux-persist/lib/storage";
// import { filtersReducer } from "./estateItems/filters";
// import { ItemsReducer } from "./estateItems/slice";
// import { devToolsEnhancer } from "@redux-devtools/extension";

// // Persisting token field from auth slice to localstorage
// // const authPersistConfig = {
// //   key: "auth",
// //   storage,
// //   whitelist: ["token"],
// // };

// const enhancer = devToolsEnhancer();

// export const store = configureStore({
//   reducer: {
//     // auth: persistReducer(authPersistConfig, authReducer),
//     objects: ItemsReducer,
//     filters: filtersReducer,
//   },
//   enhancers: [enhancer],
//   //   middleware: (getDefaultMiddleware) =>
//   //     getDefaultMiddleware({
//   //       serializableCheck: {
//   //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//   //       },
//   //     }),
//   //   // eslint-disable-next-line no-undef
//   //   devTools: process.env.NODE_ENV === "development",
// });

// // export const persistor = persistStore(store);
