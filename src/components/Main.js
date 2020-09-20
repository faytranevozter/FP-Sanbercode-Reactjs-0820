import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { UserContext } from '../contexts/UserContext';
import { Layout } from 'antd';
import Routes from './Routes';

// partial layout
import Header from './partials/Header';
import Sidebar from './partials/Sidebar';
import Footer from './partials/Footer';


const Main = () => {
  const [theme] = useContext(ThemeContext)
  const [user] = useContext(UserContext)
  const themeColor = theme && theme.color ? theme.color : 'dark'
  const isLogin = user || false

  return (
    <Layout style={{height: '100vh'}} hasSider={isLogin}>
      { isLogin && <Sidebar theme={themeColor} /> }
      <Layout>
        <Header theme={themeColor} isLogin={isLogin} />
        <Layout.Content className="content-hell-yeah">
          <div className="real-content">
            <Routes />
          </div>
        </Layout.Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default Main;
