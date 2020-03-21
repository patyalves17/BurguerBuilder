import React from 'react';
import Layout from './components/Layout/Layout';
import BurguerBuulder from './containers/BurguerBuilder/BurguerBuilder';

function App() {
  return (
    <div>
      <Layout>
        <BurguerBuulder />
      </Layout>
    </div>
  );
}

export default App;
