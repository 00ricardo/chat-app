
import Home from './screens/Home';
import './style/common.css'
import './style/small-device.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux' //Glue for Redux and React
import { store } from './redux/store'
import swal from 'sweetalert';

function App() {
  /*swal(`Hello, thank you for visit Chatlan! 
  This app is currently in developing mode. You probably will find many bugs :) 
  
  
  (Mobile Version Not Available Yet.)`)*/
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;