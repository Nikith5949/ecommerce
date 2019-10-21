import React from 'react';
import './collections-overview.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import Previewcollection from '../preview-collection/preview-collection.component';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';

const CollectionsOverview=({collections})=>(

<div className='collections-overview'>
{
    collections.map(({id, ...otherCollectionProps}) => ( <Previewcollection key={id} {...otherCollectionProps}/>)
    )

}


</div>

)
const mapStateToProps = createStructuredSelector({


    collections:selectCollectionsForPreview

});

export default connect(mapStateToProps)(CollectionsOverview) 