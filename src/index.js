import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import AppContainer from './containers/AppContainer';
import reducer from './reducers/reducers'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const render = () => ReactDOM.render(
    <Provider store={ store }>
        <AppContainer/>
    </Provider>,
    document.getElementById('root')
);

store.subscribe(render);
render();
registerServiceWorker();
