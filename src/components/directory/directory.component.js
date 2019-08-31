import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'
import {selectDirectorySelections} from '../../redux/directory/directoru.selectors';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';


const Directory = ({sections}) => {
  return (
    <div className = 'directory-menu'>
        {
            sections.map(({...otherSectionProps}) => (
                <MenuItem key = {otherSectionProps.id} {...otherSectionProps}></MenuItem>
            ))
        }                
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySelections
});

export default connect(mapStateToProps)(Directory);