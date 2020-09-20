import React from 'react';
import { Layout, Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';

const Sidebar = (props) => {
  return (
    <Layout.Sider onCollapse={(collapsed, type) => { console.log(collapsed, type); }}>
      <div className="logo" />
      <Menu theme={props.theme} mode="inline">
        <SubMenu title="Movie Editor">
          <Menu.Item>
            List
          </Menu.Item>
          <Menu.Item>
            Create
          </Menu.Item>
        </SubMenu>
        <SubMenu title="Games Editor">
          <Menu.Item>
            Hahahuhu
          </Menu.Item>
          <Menu.Item>
            Hahahuhu
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Layout.Sider>
  );
};

export default Sidebar;
