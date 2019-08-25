import React from 'react';

import PreviewCollection from '../../components/preview-collection/preview-collection.component';
import SHOP_DATA from './shop.data';
class ShopPage extends React.Component {
    constructor(){
        super();
        this.state = {
            collections: SHOP_DATA         
        }
    }
    render() {
        const {collections} = this.state
        return (
            <div>
                {
                    collections.map(({...collection}) => (
                        <PreviewCollection 
                            key = {collection.id} {...collection}>
                            {collection.items.name}
                        </PreviewCollection>
                    ))
                }
            </div>
            )
    }
}

export default ShopPage;