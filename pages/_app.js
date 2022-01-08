import { useEffect } from 'react'
import '../styles/globals.css'
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from "../redux/reducers/allReducers";
const store = createStore(rootReducer);

function MyApp({ Component, pageProps }) {
  useEffect(()=> {
  // Remove the server-side injected CSS.
  const jssStyles = document.querySelector('#jss-server-side');
  if (jssStyles) {
    jssStyles.parentElement.removeChild(jssStyles);
  }
  }, [])
  return <Provider store={store}>
          <Component {...pageProps} />
    </Provider>
}

export default MyApp
