import React from 'react';
import ChannelList from './ChannelList';

export default function Sidebar () {

  return (
    <sidebar>
      <div className="sidebar-header">
        <h3 href="#">
          <div>PolyChat</div>
          <i alt="Brand" className="glyphicon glyphicon-comment">
          </i>
        </h3>
      </div>
      <h5 className="channelHeader">Channels</h5>
      <ChannelList />
    </sidebar>
  );
}
