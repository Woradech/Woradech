import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// Root
import Bisection from './Page/Root Of Equation/Bisection'
import FalsePosition from './Page/Root Of Equation/FalsePosition'
import Onepoint from './Page/Root Of Equation/Onepoint'
import NewtonRaphson from './Page/Root Of Equation/NewtonRaphson'
import Secant from './Page/Root Of Equation/Secant'

// linear
import Cramer from './Page/Linear Algebra/Cramer'




//Regression
import Linear from './Page/Regression/Linear';


//Integration
import Trapezoidal from './Page/Integration/Trapezoidal';
import CompositeTrapezoidal from './Page/Integration/CompositeTrapezoidal';
import Simpson from './Page/Integration/Simpson';
import CompositeSimpson from './Page/Integration/CompositeSimpson';

//Differentiation
import Forward from './Page/Differentiation/Forward';
import Backward from './Page/Differentiation/Backward';
import Central from './Page/Differentiation/Central';


import React, { Component } from 'react'
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu} from 'antd';

/*import {
  CalculatorFilled,
  LineOutlined,
  LineChartOutlined,
  FundOutlined
} from '@ant-design/icons';*/


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }



  render() {
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

              <SubMenu
                key="Root"
                title={
                  <span>
                    <span>Root of equation</span>
                  </span>
                }
              >
                <Menu.Item key="1">Bisection  <Link to="/Bisection" />  </Menu.Item>
                <Menu.Item key="2">False Position <Link to="/FalsePosition" /> </Menu.Item>
                <Menu.Item key="3">Onepoint <Link to="/Onepoint" /> </Menu.Item>
                <Menu.Item key="4">Newton Raphson <Link to="/NewtonRaphson" /> </Menu.Item>
                <Menu.Item key="5">Secant <Link to="/Secant" /> </Menu.Item>

              </SubMenu>

              <SubMenu
                key="LinearAl"
                title={
                  <span>
                    <span>Linear Algebra</span>
                  </span>
                }
              >
                <Menu.Item key="6">Cramer's <Link to="/Cramer" /> </Menu.Item>
                

              </SubMenu>


              <SubMenu
                key="Regress"
                title={
                  <span>
                    <span>Regression</span>
                  </span>
                }
              >
                <Menu.Item key="7">Linear <Link to="/Linear" /> </Menu.Item>

              </SubMenu>

              <SubMenu
                key="Integrat"
                title={
                  <span>
                    <span>Integration</span>
                  </span>
                }
              >
                <Menu.Item key="8">Trapezoidal <Link to="/Trapezoidal" /> </Menu.Item>
                <Menu.Item key="9">Composite Trapezoidal <Link to="/CompositeTrapezoidal" /> </Menu.Item>
                <Menu.Item key="10">Simpson<Link to="/Simpson" /> </Menu.Item>
                <Menu.Item key="11">Composite Simpson<Link to="/CompositeSimpson" /> </Menu.Item>

              </SubMenu>

              <SubMenu
                key="Diff"
                title={
                  <span>
                    <span>Differentiation</span>
                  </span>
                }
              >
                <Menu.Item key="12">Forward <Link to="/Forward" /> </Menu.Item>
                <Menu.Item key="13">Backward <Link to="/Backward" /> </Menu.Item>
                <Menu.Item key="14">Central <Link to="/Central" /> </Menu.Item>


              </SubMenu>


            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />

            <Content style={{ margin: '0 16px' }}>
              <Route path="/Bisection" component={Bisection} />
              <Route path="/FalsePosition" component={FalsePosition} />
              <Route path="/Onepoint" component={Onepoint} />
              <Route path="/NewtonRaphson" component={NewtonRaphson} />
              <Route path="/Secant" component={Secant} />
              <Route path="/Cramer" component={Cramer} />
              <Route path="/Linear" component={Linear} />
              <Route path="/Trapezoidal" component={Trapezoidal} />
              <Route path="/CompositeTrapezoidal" component={CompositeTrapezoidal} />
              <Route path="/Simpson" component={Simpson} />
              <Route path="/CompositeSimpson" component={CompositeSimpson} />
              <Route path="/Forward" component={Forward} />
              <Route path="/Backward" component={Backward} />
              <Route path="/Central" component={Central} />

            </Content>
          </Layout>
        </Layout>
      </Router>
    )
  }
}

export default App
