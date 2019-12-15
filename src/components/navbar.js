import React from "react"
import { Link } from "gatsby"
import { Layout, Menu, Drawer, Icon } from "antd"

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: false, placement: "left" }
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    })
  }

  onClose = () => {
    this.setState({
      visible: false,
    })
  }

  render() {
    const linkStyle = {
      textDecoration: "none",
    }
    return (
      <Layout.Header>
        <div>
          <Icon
            type="menu"
            onClick={this.showDrawer}
            style={{ color: "#fff", fontSize: "20px" }}
          />
          <Drawer
            title="CoderDojo Padova"
            placement={this.state.placement}
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
            width="80%"
          >
            <Menu
              mode="inline"
              // defaultSelectedKeys={["2"]}
              style={{ lineHeight: "63px", borderWidth: "0px" }}
            >
              <Menu.Item key="1">
                <Link to="/" style={linkStyle}>
                  <Icon type="global" />
                  <span>Home</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/partecipa/" style={linkStyle}>
                  <Icon type="star" />
                  <span>Partecipa</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/calendario/" style={linkStyle}>
                  <Icon type="calendar" />
                  <span>Incontri</span>
                </Link>
              </Menu.Item>
              <Menu.SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="bulb" />
                    <span>Vuoi contribuire?</span>
                  </span>
                }
              >
                <Menu.Item key="4">
                  <Link
                    to="/diventa-mentor-di-coderdojo-padova/"
                    style={linkStyle}
                  >
                    <Icon type="smile" />
                    <span>Diventa un mentor</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="5">
                  <Link to="/call-4-locations/" style={linkStyle}>
                    <Icon type="home" />
                    <span>Proponi una location</span>
                  </Link>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.Item key="6">
                <Link to="/contatti/" style={linkStyle}>
                  <Icon type="mail" />
                  <span>Contatti</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Drawer>
        </div>
      </Layout.Header>
    )
  }
}

export default Navbar
