import React from 'react';
// import { Provider } from 'react-redux';
// import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
// import store from './redux/configureStore';

const App = () => (
//   <Provider store={store}>
//     <Routes>
//       <Route
//         exact
//         path="/"
//         element={
//           <Home />
//         }
//       />
//     </Routes>
//   </Provider>
// );
  <>
    <Home />
    <Details />
  </>
);
export default App;
