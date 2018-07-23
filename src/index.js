import 'grommet/scss/vanilla/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Main from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
