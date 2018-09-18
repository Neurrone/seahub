import React from 'react';
import PropTypes from 'prop-types';
import { gettext } from '../constants';

const propTypes = {
  isMenuShow: PropTypes.bool.isRequired,
  menuPosition: PropTypes.object.isRequired,
  onDeleteHandler: PropTypes.func.isRequired,
  onPublishHandler: PropTypes.func.isRequired
};

class ListMenu extends React.Component {

  render() {
    let style = '';
    let {isMenuShow, menuPosition} = this.props;
    if (isMenuShow) {
      style = {position: 'fixed', top: menuPosition.top, left: menuPosition.left, display: 'block'}
    }
    return (
      <div>
        <ul className="dropdown-menu" style={style}>
          <li className="dropdown-item" onClick={this.props.onDeleteHandler}>{gettext('Delete')}</li>
          <li className="dropdown-item" onClick={this.props.onPublishHandler}>{gettext('Publish')}</li>
        </ul>
      </div>
    );
  }
}

ListMenu.propTypes = propTypes;

export default ListMenu;
