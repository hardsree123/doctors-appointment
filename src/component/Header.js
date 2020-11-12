import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import './Header.css';
import Location from './Location';
function Header() {
    return (
        <nav className="header">
            <div className="header__search">
                <div className="header__searchLocation">
                    {/* <LocationOnOutlinedIcon  color="#e6ecf0"  className="header__locationicon"/> */}
                    <Location/>
                </div>
                <SearchIcon className="header__searchIcon"/>
                <input type="text"  placeholder="Search doctor" className="header__searchInput"/>
                
            </div>
        </nav>
    )
}

export default Header
