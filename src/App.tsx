import Dummy from './DummyComponent';
import { Provider } from 'react-redux';
import store from './store/store';

function App(): JSX.Element {

    return (
        <Provider store={store}>
            <Dummy />
        </Provider>
    );
}

export default App;