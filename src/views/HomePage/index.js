import React from 'react';
import Content from '../../components/Collections';
import SideBar from '../../components/SideBar';

const HomePage = () => (
<div className="mw9 center ph2-ns">
  <div className="cf ph2-ns">
      <Content className="fl w-100 w-70-ns" />
      <SideBar className="fl w-100 w-30-ns" />
  </div>
</div>
);

export default HomePage;