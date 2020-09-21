import React from 'react';
import { Layout, Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import {
  VideoCameraOutlined,
  CustomerServiceOutlined,
  LockOutlined,
  BulbOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
  return (
    <Layout.Sider onCollapse={(collapsed, type) => { console.log(collapsed, type); }}>
      <div className="logo">
        Haha
      </div>
      <Menu theme={props.theme} mode="inline">
        <SubMenu title="Movie Editor" icon={<VideoCameraOutlined />}>
          <Menu.Item key="list-movie" to="/movie-editor/list">
            <Link to="/movie-editor/list">List</Link>
          </Menu.Item>
          <Menu.Item key="create-movie">
            <Link to="/movie-editor/create">Create</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu title="Games Editor" icon={<CustomerServiceOutlined />}>
          <Menu.Item key="list-game">
            <Link to="/game-editor/list">List</Link>
          </Menu.Item>
          <Menu.Item key="create-game">
            <Link to="/movie-editor/create">Create</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="change-password" icon={<LockOutlined />}>
          <Link to="/change-password">Change Password</Link>
        </Menu.Item>
        <Menu.Item key="switch-theme" icon={<BulbOutlined />}>
          <Link to="/change-theme">Change Theme</Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};

export default Sidebar;
