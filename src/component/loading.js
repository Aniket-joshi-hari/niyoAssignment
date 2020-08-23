import React from 'react';
import '../css/loading.css';

const LoadingDots = (props) => {
    const { margin } = props;
    return (<div className="spinner" style={{ margin: (margin || 0) }}>
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
    </div>);
}

export default LoadingDots;