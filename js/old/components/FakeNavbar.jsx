const React = require('react');
const PropTypes = require('prop-types');

class FakeNavbar extends React.Component {

    static propTypes = {
        onSelect: PropTypes.func
    };

    static defaultProps = {
        onSelect: () => {}
    };

    state = {
        open: true,
        selected: false
    }

    render() {

        return (
            <span id="viewer" className="viewer">
            <span id="mapstore-navbar" style={{position: 'absolute', right: 0, top: 0, width: '657px', zIndex: 1}} >
                <div id="mapstore-navbar-container" className="navbar-dx shadow">
                    <span>
                        <div id="search-help">
                            <span id="helpbadge-search-help" className="hidden  badge">?</span>
                            <span>
                                <div id="map-search-bar" className="MapSearchBar">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <input type="text" placeholder="Search by location name or coordinates ..." value="" className="form-control" style={{
                                                textOverflow: 'ellipsis'
                                            }}/>
                                            <span className="input-group-addon">
                                                <span className="glyphicon glyphicon-search"></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </span>
                    <span style={{'float': 'right'}} id="mapstore-burger-menu">
                        <div className="dropdown btn-group btn-group-primary">
                            <button id="mapstore-burger-menu-container" role="button" aria-haspopup="true" aria-expanded="false" type="button" className="square-button dropdown-toggle btn btn-primary">
                                <span className="glyphicon glyphicon-menu-hamburger"></span>
                            </button>
                            <ul role="menu" className="dropdown-menu dropdown-menu-right" aria-labelledby="mapstore-burger-menu-container">
                                <span>
                                    <li role="heading" className="dropdown-header">
                                        <span>Options</span>
                                    </li>
                                </span>
                                <li role="presentation" className="">
                                    <a role="menuitem" tabIndex="-1" href="#">
                                        <span className="glyphicon glyphicon-print"></span>
                                        <span></span>
                                        <span>Print</span>
                                    </a>
                                </li>
                                <li role="presentation" className="">
                                    <a role="menuitem" tabIndex="-1" href="#">
                                        <span className="glyphicon glyphicon-upload"></span>
                                        <span></span>

                                        <span>Add Local Shapefile</span>
                                    </a>
                                </li>
                                <li role="presentation" className="">
                                    <a wrap="true" role="menuitem" tabIndex="-1" href="#">
                                        <span className="glyphicon glyphicon-folder-open"></span>
                                        <span></span>

                                        <span>Catalog</span>
                                    </a>
                                </li>
                                <li role="presentation" className="">
                                    <a role="menuitem" tabIndex="-1" href="#">
                                        <span className="glyphicon glyphicon-1-ruler"></span>
                                        <span className="hidden mapstore-helpbadge badge">?</span>

                                        <span>Measure</span>
                                    </a>
                                </li>
                                <li role="presentation" className="">
                                    <a wrap="true" role="menuitem" tabIndex="-1" href="#">
                                        <span className="glyphicon glyphicon-cog"></span>
                                        <span></span>

                                        <span>Settings</span>
                                    </a>
                                </li>

                                <li role="presentation" className="">
                                    <a href="docs" target="blank" role="menuitem" tabIndex="-1">
                                        <span className="glyphicon glyphicon-question-sign"></span>
                                        <span></span>

                                        <span>Help</span>
                                    </a>
                                </li>
                                <li role="presentation" className="">
                                    <a role="menuitem" tabIndex="-1" href="#">
                                        <span className="glyphicon glyphicon-share-alt"></span>
                                        <span></span>

                                        <span>Share</span>
                                    </a>
                                </li>
                                <li role="presentation" className="">
                                    <a role="menuitem" tabIndex="-1" href="#">
                                        <span className="glyphicon glyphicon-book"></span>
                                        <span></span>

                                        <span>Tutorial</span>
                                    </a>
                                </li>
                                <li role="presentation" className="">
                                    <a role="menuitem" tabIndex="-1" href="#">
                                        <span className="glyphicon glyphicon-comment"></span>
                                        <span></span>

                                        <span>Annotations</span>
                                    </a>
                                </li>
                                <li role="presentation" className="">
                                    <a role="menuitem" href="#">
                                        <span className="glyphicon glyphicon-info-sign"></span>
                                        <span></span>

                                        <span>About this app...</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </span>
                    <div style={{'float': 'right'}} className="dropdown btn-group btn-group-primary">
                        <button id="dropdown-basic-primary" role="button" aria-haspopup="true" aria-expanded="false" type="button" className="square-button dropdown-toggle btn btn-primary">
                            <span className="glyphicon glyphicon-user"></span>
                        </button>
                        <ul role="menu" className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-basic-primary">
                            <li role="presentation" className="">
                                <a role="menuitem" tabIndex="-1" href="#">
                                    <span className="glyphicon glyphicon-log-in"></span>
                                    <span>Login</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a href="#">
                    <button style={{'float': 'right'}} icon="[object Object]" id="home-button" type="button" className="square-button btn btn-primary">
                        <span className="glyphicon glyphicon-home"></span>
                    </button>
                    </a>
                </div>

            </span></span>
        );
    }
}

module.exports = FakeNavbar;
