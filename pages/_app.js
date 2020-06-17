import '../css/tailwind.css'
import Head from 'next/head'
import Sidebar from "../components/Sidebar";
import reducer from '../redux/reducers'
import middleware from '../redux/middleware'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'



export default function App({Component, pageProps}){
  // const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  //     applyMiddleware(...middleware)
  //   ));
  const store = createStore(reducer, middleware) // would like to add redux dev tools...

  return(    
    <Provider store={store}>
      <Head />
      <Sidebar >
        <Component {...pageProps} />
      </Sidebar>
    </Provider>
    // <>
    //   <Head />
    //   <Sidebar >
    //     <Component {...pageProps} />
    //   </Sidebar>
    // </>
  )
}