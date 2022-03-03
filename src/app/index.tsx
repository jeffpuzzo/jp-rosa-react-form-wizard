import * as React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import '@patternfly/react-styles/css/components/Wizard/wizard.css';
import '@patternfly/patternfly/patternfly-addons.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppLayout } from '@app/AppLayout/AppLayout';
import { AppRoutes } from '@app/routes';
import '@app/app.css';

const App: React.FunctionComponent = () => (
  <Router>
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  </Router>
);

export default App;
