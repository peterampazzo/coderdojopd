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
          >
            <Menu
              mode="inline"
              // defaultSelectedKeys={["2"]}
              style={{ lineHeight: "63px" }}
            >
              <Menu.Item key="1">
                <Link to="/partecipa/" style={linkStyle}>
                  Partecipa
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/calendario/" style={linkStyle}>
                  Incontri
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/contatti/" style={linkStyle}>
                  Contatti
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
