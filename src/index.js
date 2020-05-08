import React from 'react';
import { render } from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import App from './App';
import './index.scss';

library.add(fab);
library.add(fas);

render(<App />, document.getElementById('root'));
