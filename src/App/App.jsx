import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from '../Context/AuthContext';
import { store } from '../Store/Store';
import Router from './Router';

function App() {
  return (
    <>
      <Provider store={store}>
        <AuthContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </AuthContextProvider>
      </Provider>
    </>
  );
}

export default App;
