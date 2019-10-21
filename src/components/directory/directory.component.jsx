import React from 'react';
import Menuitem from '../menu-item/menu-item.component'
import {connect} from 'react-redux';
import './directory.styles.scss'
import {selectDirectorySection} from '../../redux/directory/directory.selectors';
import {createStructuredSelector} from 'reselect';
const Directory=({sections})=> (
<div className='directory-menu'>
    {
        sections.map(({ id, ...otherSectionProps}) => (
            <Menuitem key={id} {...otherSectionProps}/>
        ))
    }
    </div>

    );




const mapStateToProps =createStructuredSelector({sections:selectDirectorySection});

export default connect(mapStateToProps)(Directory);