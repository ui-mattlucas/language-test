import React from 'react';
import { useIntl } from 'react-intl';

const App = () => {
  const intl = useIntl();

  return (
    <div>
      <h1>{intl.formatMessage({ id: 'BTBGtX' })}</h1>
      <p>{intl.formatMessage({ id: 'EshJXE' })}</p>
    </div>
  );
};

export default App;
