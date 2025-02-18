import React from 'react';
import { createRoot } from 'react-dom/client'
import { Counter } from '@rsch-org/react-npm-package'
// Styles
import './index.pcss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<>
  <h1>Hello world</h1>
  <Counter />
</>);