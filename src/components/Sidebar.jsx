import React from 'react';
import './Sidebar.css'


function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__section">
                <strong className="sidebar__sectionTitle">CATEGORIES</strong>
                <p className="sidebar__sectionCategory">All Categories</p>
            </div>
            <div className="sidebar__section">
                <strong className="sidebar__sectionTitle">LOCATIONS</strong>
                <p className="sidebar__sectionCategory">All Categories</p>
            </div>
        </div>
    )
}

export default Sidebar
