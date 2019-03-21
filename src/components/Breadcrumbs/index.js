import React from 'react';

import breadCrumbs from './BreadCrumbs.module.css';

const breadcrumbs = (props) => {
    const breadCrumbsItems = props.items.map( item => {to: item.to});
    return (
      <div className={breadCrumbs.BreadCrumbs}>
          Breadcrumbs
      </div>
    );
}