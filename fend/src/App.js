
import Home from './screens/Home';
import './style/common.css'
import './style/small-device.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux' //Glue for Redux and React
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;