import { Component } from "react";
import { NavLink } from "react-router-dom";
import Profil from "./public/img/avatar/avatar.jpg"

class LeftSideBar extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <nav id="sidebar" className="sidebar js-sidebar">
                <div className="sidebar-content js-simplebar">
                    <a className="sidebar-brand" href="/">
                        <span id="sidebarBrand" className="sidebar-brand-text align-middle">
                            AdminKit
                            <sup><small className="badge bg-primary text-uppercase">Pro</small></sup>
                        </span>

                        <svg className="sidebar-brand-icon align-middle" width="32px" height="32px" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" color="#FFFFFF" style={{ marginLeft: "-3px" }}>
                            <path d="M12 4L20 8.00004L12 12L4 8.00004L12 4Z"></path>
                            <path d="M20 12L12 16L4 12"></path>
                            <path d="M20 16L12 20L4 16"></path>
                        </svg>
                    </a>

                    <div className="sidebar-user">
                        <div className="d-flex justify-content-center">
                            <div className="flex-shrink-0">
                                <img src={Profil} className="avatar img-fluid rounded me-1" alt="Charles Hall" />
                            </div>

                            <div className="flex-grow-1 ps-2">
                                <a className="sidebar-user-title dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                    Charles Hall
                                </a>

                                <div className="dropdown-menu dropdown-menu-start">
                                    <a className="dropdown-item" href="pages-profile.html"><i className="align-middle me-1" data-feather="user"></i> Profile</a>
                                    <a className="dropdown-item" href="#"><i className="align-middle me-1" data-feather="pie-chart"></i> Analytics</a>

                                    <div className="dropdown-divider"></div>

                                    <a className="dropdown-item" href="pages-settings.html"><i className="align-middle me-1" data-feather="settings"></i> Settings &amp; Privacy</a>
                                    <a className="dropdown-item" href="#"><i className="align-middle me-1" data-feather="help-circle"></i> Help Center</a>

                                    <div className="dropdown-divider"></div>

                                    <a className="dropdown-item" href="#">Log out</a>
                                </div>

                                <div className="sidebar-user-subtitle">Designer</div>
                            </div>
                        </div>
                    </div>

                    <ul className="sidebar-nav">
                        <li className="sidebar-item active">
                            <a data-bs-target="#maintenances" data-bs-toggle="collapse" className="sidebar-link">
                                <i className="align-middle" data-feather="archive"></i> <span className="align-middle">Maintenance</span>
                            </a>

                            <ul id="maintenances" className="sidebar-dropdown list-unstyled collapse show" data-bs-parent="#sidebar">
                                <li className="sidebar-item active"><NavLink className="sidebar-link js-sidebar-link" to="/parameter">Parameter</NavLink></li>
                                <li className="sidebar-item"><NavLink className="sidebar-link js-sidebar-link" to="/country">Country</NavLink></li>
                                <li className="sidebar-item"><NavLink className="sidebar-link js-sidebar-link" to="/province">Province</NavLink></li>
                                <li className="sidebar-item"><NavLink className="sidebar-link js-sidebar-link" to="/city">City</NavLink></li>
                                <li className="sidebar-item"><NavLink className="sidebar-link js-sidebar-link" to="/district">District</NavLink></li>
                                <li className="sidebar-item"><NavLink className="sidebar-link js-sidebar-link" to="/village">Village</NavLink></li>
                                <li className="sidebar-item"><NavLink className="sidebar-link js-sidebar-link" to="/postal">Postal</NavLink></li>
                            </ul>
                        </li>

                        <li className="sidebar-header">
                            Pages
                        </li>

                        <li className="sidebar-item">
                            <a data-bs-target="#dashboards" data-bs-toggle="collapse" className="sidebar-link">
                                <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Dashboards</span>
                            </a>

                            <ul id="dashboards" className="sidebar-dropdown list-unstyled collapse show" data-bs-parent="#sidebar">
                                <li className="sidebar-item"><a className="sidebar-link" href="/">Analytics</a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="dashboard-ecommerce.html">E-Commerce <span className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="dashboard-crypto.html">Crypto <span className="sidebar-badge badge bg-primary">Pro</span></a></li>
                            </ul>
                        </li>

                        <li className="sidebar-item">
                            <a data-bs-target="#pages" data-bs-toggle="collapse" className="sidebar-link collapsed">
                                <i className="align-middle" data-feather="layout"></i> <span className="align-middle">Pages</span>
                            </a>

                            <ul id="pages" className="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                                <li className="sidebar-item"><a className="sidebar-link" href="pages-settings.html">Settings</a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="pages-projects.html">Projects <span className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="pages-clients.html">Clients <span className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="pages-pricing.html">Pricing <span className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="pages-chat.html">Chat <span className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="pages-blank.html">Blank Page</a></li>
                            </ul>
                        </li>

                        <li className="sidebar-item">
                            <a className="sidebar-link" href="pages-profile.html">
                                <i className="align-middle" data-feather="user"></i> <span className="align-middle">Profile</span>
                            </a>
                        </li>

                        <li className="sidebar-item">
                            <a className="sidebar-link" href="pages-invoice.html">
                                <i className="align-middle" data-feather="credit-card"></i> <span className="align-middle">Invoice</span>
                            </a>
                        </li>

                        <li className="sidebar-item">
                            <a className="sidebar-link" href="pages-tasks.html">
                                <i className="align-middle" data-feather="list"></i> <span className="align-middle">Tasks</span>
                                <span className="sidebar-badge badge bg-primary">Pro</span>
                            </a>
                        </li>

                        <li className="sidebar-item">
                            <a className="sidebar-link" href="calendar.html">
                                <i className="align-middle" data-feather="calendar"></i> <span className="align-middle">Calendar</span>
                                <span className="sidebar-badge badge bg-primary">Pro</span>
                            </a>
                        </li>

                        <li className="sidebar-item">
                            <a href="#auth" data-bs-toggle="collapse" className="sidebar-link collapsed">
                                <i className="align-middle" data-feather="users"></i> <span className="align-middle">Auth</span>
                            </a>

                            <ul id="auth" className="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                                <li className="sidebar-item"><a className="sidebar-link" href="pages-sign-in.html">Sign In</a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="pages-sign-up.html">Sign Up</a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="pages-reset-password.html">Reset Password <span className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="pages-404.html">404 Page <span className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="pages-500.html">500 Page <span className="sidebar-badge badge bg-primary">Pro</span></a></li>
                            </ul>
                        </li>

                        <li className="sidebar-header">
                            Components
                        </li>

                        <li className="sidebar-item">
                            <a data-bs-target="#ui" data-bs-toggle="collapse" className="sidebar-link collapsed">
                                <i className="align-middle" data-feather="briefcase"></i> <span className="align-middle">UI Elements</span>
                            </a>

                            <ul id="ui" className="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                                <li className="sidebar-item"><a className="sidebar-link" href="ui-alerts.html">Alerts</a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="ui-buttons.html">Buttons</a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="ui-cards.html">Cards</a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="ui-general.html">General</a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="ui-grid.html">Grid</a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="ui-modals.html">Modals</a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="ui-offcanvas.html">Offcanvas <span className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="ui-placeholders.html">Placeholders <span className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="ui-tabs.html">Tabs <span className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="ui-typography.html">Typography</a></li>
                            </ul>
                        </li>

                        <li className="sidebar-item">
                            <a data-bs-target="#icons" data-bs-toggle="collapse" className="sidebar-link collapsed">
                                <i className="align-middle" data-feather="coffee"></i> <span className="align-middle">Icons</span>
                                <span className="sidebar-badge badge bg-light">1.500+</span>
                            </a>

                            <ul id="icons" className="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                                <li className="sidebar-item"><a className="sidebar-link" href="icons-feather.html">Feather</a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="icons-font-awesome.html">Font Awesome <span className="sidebar-badge badge bg-primary">Pro</span></a></li>
                            </ul>
                        </li>

                        <li className="sidebar-item">
                            <a data-bs-target="#forms" data-bs-toggle="collapse" className="sidebar-link collapsed">
                                <i className="align-middle" data-feather="check-circle"></i> <span className="align-middle">Forms</span>
                            </a>

                            <ul id="forms" className="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                                <li className="sidebar-item"><a className="sidebar-link" href="forms-basic-inputs.html">Basic Inputs</a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="forms-layouts.html">Form Layouts <span className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="forms-input-groups.html">Input Groups <span className="sidebar-badge badge bg-primary">Pro</span></a></li>
                            </ul>
                        </li>

                        <li className="sidebar-item">
                            <a className="sidebar-link" href="tables-bootstrap.html">
                                <i className="align-middle" data-feather="list"></i> <span className="align-middle">Tables</span>
                            </a>
                        </li>

                        <li className="sidebar-header">
                            Plugins &amp; Addons
                        </li>

                        <li className="sidebar-item">
                            <a data-bs-target="#form-plugins" data-bs-toggle="collapse" className="sidebar-link collapsed">
                                <i className="align-middle" data-feather="check-square"></i> <span className="align-middle">Form Plugins</span>
                            </a>

                            <ul id="form-plugins" className="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                                <li className="sidebar-item"><a className="sidebar-link" href="forms-advanced-inputs.html">Advanced Inputs <span className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="forms-editors.html">Editors <span className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="forms-validation.html">Validation <span className="sidebar-badge badge bg-primary">Pro</span></a></li>
                            </ul>
                        </li>

                        <li className="sidebar-item">
                            <a data-bs-target="#datatables" data-bs-toggle="collapse" className="sidebar-link collapsed">
                                <i className="align-middle" data-feather="list"></i> <span className="align-middle">DataTables</span>
                            </a>

                            <ul id="datatables" className="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                                <li className="sidebar-item"><a className="sidebar-link" href="tables-datatables-responsive.html">Responsive Table <span className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="tables-datatables-buttons.html">Table with Buttons <span className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="tables-datatables-column-search.html">Column Search <span className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="tables-datatables-fixed-header.html">Fixed Header <span className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="tables-datatables-multi.html">Multi Selection <span className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="tables-datatables-ajax.html">Ajax Sourced Data <span className="sidebar-badge badge bg-primary">Pro</span></a></li>
                            </ul>
                        </li>

                        <li className="sidebar-item">
                            <a data-bs-target="#charts" data-bs-toggle="collapse" className="sidebar-link collapsed">
                                <i className="align-middle" data-feather="bar-chart-2"></i> <span className="align-middle">Charts</span>
                            </a>

                            <ul id="charts" className="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                                <li className="sidebar-item"><a className="sidebar-link" href="charts-chartjs.html">Chart.js</a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="charts-apexcharts.html">ApexCharts <span className="sidebar-badge badge bg-primary">Pro</span></a></li>
                            </ul>
                        </li>

                        <li className="sidebar-item">
                            <a className="sidebar-link" href="notifications.html">
                                <i className="align-middle" data-feather="bell"></i> <span className="align-middle">Notifications</span>
                                <span className="sidebar-badge badge bg-primary">Pro</span>
                            </a>
                        </li>

                        <li className="sidebar-item">
                            <a data-bs-target="#maps" data-bs-toggle="collapse" className="sidebar-link collapsed">
                                <i className="align-middle" data-feather="map"></i> <span className="align-middle">Maps</span>
                            </a>

                            <ul id="maps" className="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                                <li className="sidebar-item"><a className="sidebar-link" href="maps-google.html">Google Maps</a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="maps-vector.html">Vector Maps <span className="sidebar-badge badge bg-primary">Pro</span></a></li>
                            </ul>
                        </li>

                        <li className="sidebar-item">
                            <a data-bs-target="#multi" data-bs-toggle="collapse" className="sidebar-link collapsed">
                                <i className="align-middle" data-feather="corner-right-down"></i> <span className="align-middle">Multi Level</span>
                            </a>

                            <ul id="multi" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                                <li className="sidebar-item">
                                    <a data-bs-target="#multi-2" data-bs-toggle="collapse" className="sidebar-link collapsed">Two Levels</a>

                                    <ul id="multi-2" className="sidebar-dropdown list-unstyled collapse">
                                        <li className="sidebar-item">
                                            <a className="sidebar-link" href="#">Item 1</a>
                                            <a className="sidebar-link" href="#">Item 2</a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="sidebar-item">
                                    <a data-bs-target="#multi-3" data-bs-toggle="collapse" className="sidebar-link collapsed">Three Levels</a>
                                    <ul id="multi-3" className="sidebar-dropdown list-unstyled collapse">
                                        <li className="sidebar-item">
                                            <a data-bs-target="#multi-3-1" data-bs-toggle="collapse" className="sidebar-link collapsed">Item 1</a>

                                            <ul id="multi-3-1" className="sidebar-dropdown list-unstyled collapse">
                                                <li className="sidebar-item">
                                                    <a className="sidebar-link" href="#">Item 1</a>
                                                    <a className="sidebar-link" href="#">Item 2</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="sidebar-item">
                                            <a className="sidebar-link" href="#">Item 2</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <hr className="sidebar-divider d-none d-md-block" />

                    <div className="text-center d-none d-md-inline">
                        <button className="toggled rounded-circle angle-right js-sidebar-compact" id="sidebarToggle"></button>
                    </div>

                    <div className="sidebar-cta">
                        <div className="sidebar-cta-content">
                            <strong className="d-inline-block mb-2">Upgrade to Pro</strong>
                            <div className="mb-3 text-sm">Are you looking for more components? Check out our premium version.</div>
                            <div className="d-grid">
                                <a href="upgrade-to-pro.html" className="btn btn-primary">Upgrade to Pro</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );

    }
}

export default LeftSideBar;