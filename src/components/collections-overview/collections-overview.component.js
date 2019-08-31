import React from 'react';

import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';

import './collections.overview.styles.scss'; 

import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';

import PreviewCollection from '../preview-collection/preview-collection.component';

const CollectionsOverview = ({ collections }) => (
    <div className = 'collections-overview'>
    {
        collections.map(({...collection}) => (
            <PreviewCollection 
                key = {collection.id} {...collection}>
                {collection.items.name}
            </PreviewCollection>
        ))
    }   
    </div>
);
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview)