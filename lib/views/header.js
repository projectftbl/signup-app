import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import { open, close } from 'shetland';
import { Session } from 'seismic';
import { Anchor } from 'comport';
import { Menu } from 'ickle';

@Radium
export class Header extends Component {
  static propTypes = {
    sidebar: PropTypes.object.isRequired
  } 

  toggleSidebar() {
    const { open, close, sidebar } = this.props;
    (sidebar.active ? close : open)();
  }

  render() {
    const { sidebar, router } = this.props;

    const styles = {
      base: {
        padding: '20px 30px'
      , borderBottom: '1px solid #ddd'
      , backgroundColor: '#fafafa'
      }
    };

    return (
      <div style={styles.base}>
        <Anchor onClick={() => this.toggleSidebar()}>
          <Menu colour='#db2828' active={!sidebar.active}/> MotivateTee
        </Anchor>

        <div style={{float:'right'}}>
          <Session/>
        </div>
      </div>
    );
  }
}

export default connect(state => ({ sidebar: state.sidebar, router: state.router }), { open, close })(Header);
