import { useState } from 'react';
import propertySierra from '../assets/property-sierra.png';
import propertyCanyon from '../assets/property-canyon.png';
import propertyOceanfront from '../assets/property-oceanfront.png';
import './Dashboard.css';

const paymentsData = [
    { id: '22739', property: 'Lakeview Residency', address: '4517 Washington Ave...', customer: 'Dianne Russell', amount: '$293.00', status: 'Pending' },
    { id: '70668', property: 'Palm Grove Villas', address: '6391 Elgin St. Celin...', customer: 'Jane Cooper', amount: '$293.00', status: 'Failed' },
    { id: '97174', property: 'SkyView Apartments', address: '2118 Thornridge Cir. Syr...', customer: 'Ralph Edwards', amount: '$293.00', status: 'Pending' },
    { id: '43756', property: 'Elite Apartments', address: '1901 Thornridge Ci...', customer: 'Albert Flores', amount: '$293.00', status: 'Pending' },
    { id: '53178', property: 'Royal Heights', address: '2972 Westheimer Rd...', customer: 'Ronald Richards', amount: '$293.00', status: 'Pending' },
];

const properties = [
    { img: propertySierra, price: '$625,000', label: '/month', name: 'Sierra Lakeview Estate', location: 'Lake Tahoe, California, USA', beds: 3, baths: 2, sqft: 1200 },
    { img: propertyCanyon, price: '$745,000', label: '/month', name: 'Canyon Ridge Retreat', location: 'Denver, Colorado, USA', beds: 4, baths: 3, sqft: 1400 },
    { img: propertyOceanfront, price: '$825,000', label: '/month', name: 'Oceanfront Paradise', location: 'Los Angeles, California, USA', beds: 5, baths: 4, sqft: 1800 },
];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
const rentData = [9, 12, 11, 14, 13, 10, 8];
const saleData = [5, 6, 5, 7, 6, 5, 4];

const sideNavItems = [
    { icon: 'grid', label: 'Dashboard', active: true },
    { icon: 'compass', label: 'Discover' },
    { icon: 'building', label: 'Property' },
    { icon: 'users', label: 'Customer' },
    { icon: 'bar-chart', label: 'Analytics' },
    { icon: 'package', label: 'Orders' },
    { icon: 'credit-card', label: 'Transaction' },
];

const otherNavItems = [
    { icon: 'inbox', label: 'Inbox' },
    { icon: 'calendar', label: 'Calendar' },
];

function SidebarIcon({ name }: { name: string }) {
    const icons: Record<string, JSX.Element> = {
        'grid': <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" /><rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" /><rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" /><rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" /></svg>,
        'compass': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" /></svg>,
        'building': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><path d="M9 22V12h6v10" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" /></svg>,
        'users': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
        'bar-chart': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
        'package': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21" /><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>,
        'credit-card': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>,
        'inbox': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12" /><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /></svg>,
        'calendar': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>,
    };
    return icons[name] || null;
}

export default function Dashboard() {
    const [chartMode, setChartMode] = useState<'Monthly' | 'Annually'>('Annually');

    const maxBar = Math.max(...rentData, ...saleData);

    return (
        <div className="dashboard">
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="sidebar-logo">
                    <div className="logo-icon">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M14 4L4 24h20L14 4z" fill="#E8713A" />
                            <path d="M14 10L9 20h10L14 10z" fill="#fff" />
                        </svg>
                    </div>
                    <span className="logo-text">RentFlow</span>
                </div>

                <nav className="sidebar-nav">
                    <span className="nav-section-label">Home</span>
                    {sideNavItems.map((item) => (
                        <a key={item.label} className={`nav-item ${item.active ? 'active' : ''}`} href="#">
                            <SidebarIcon name={item.icon} />
                            <span>{item.label}</span>
                        </a>
                    ))}

                    <span className="nav-section-label">Others</span>
                    {otherNavItems.map((item) => (
                        <a key={item.label} className="nav-item" href="#">
                            <SidebarIcon name={item.icon} />
                            <span>{item.label}</span>
                        </a>
                    ))}
                </nav>

                <div className="sidebar-upgrade">
                    <div className="upgrade-icon">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <circle cx="20" cy="20" r="20" fill="#E8713A" />
                            <path d="M20 10l-4 8h3v8l5-10h-3l-1-6z" fill="#fff" />
                        </svg>
                    </div>
                    <h4>Upgrade to Premium</h4>
                    <p>Unlock all features including analytics, reports, and unlimited properties.</p>
                    <button className="upgrade-btn">Upgrade Account</button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                {/* Top Bar */}
                <header className="topbar">
                    <div className="search-bar">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                        <input type="text" placeholder="Search task" />
                        <div className="search-shortcut">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
                            <span>F</span>
                        </div>
                    </div>
                    <div className="topbar-right">
                        <button className="icon-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                        </button>
                        <button className="icon-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                        </button>
                        <div className="user-profile">
                            <div className="avatar">EH</div>
                            <div className="user-info">
                                <span className="user-name">Esther Howard</span>
                                <span className="user-email">cameron20@mail.com</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Stat Cards */}
                <div className="stat-cards">
                    <div className="stat-card">
                        <div className="stat-header">
                            <span className="stat-label">Properties</span>
                            <div className="stat-icon">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8713A" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22V12h6v10" /></svg>
                            </div>
                        </div>
                        <div className="stat-value">
                            <span className="stat-number">2,548</span>
                            <span className="stat-change positive">+8.0%</span>
                        </div>
                        <div className="stat-sparkline">
                            {[4, 6, 5, 7, 6, 8, 7].map((v, i) => (
                                <div key={i} className="spark-bar" style={{ height: `${v * 4}px` }} />
                            ))}
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-header">
                            <span className="stat-label">New Agent</span>
                            <div className="stat-icon">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8713A" strokeWidth="2" strokeLinecap="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                            </div>
                        </div>
                        <div className="stat-value">
                            <span className="stat-number">1,754</span>
                            <span className="stat-change positive">+6.0%</span>
                        </div>
                        <div className="stat-sparkline sparkline-wave">
                            <svg viewBox="0 0 120 40" className="wave-svg">
                                <path d="M0 30 Q15 10 30 25 T60 20 T90 15 T120 25" fill="none" stroke="#E8713A" strokeWidth="2" />
                                <path d="M0 30 Q15 10 30 25 T60 20 T90 15 T120 25 V40 H0 Z" fill="rgba(232,113,58,0.1)" />
                            </svg>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-header">
                            <span className="stat-label">Tenants</span>
                            <div className="stat-icon">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8713A" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            </div>
                        </div>
                        <div className="stat-value">
                            <span className="stat-number">2,548</span>
                            <span className="stat-change positive">+8.0%</span>
                        </div>
                        <div className="stat-sparkline sparkline-wave">
                            <svg viewBox="0 0 120 40" className="wave-svg">
                                <path d="M0 25 Q20 5 40 20 T80 15 T120 20" fill="none" stroke="#E8713A" strokeWidth="2" />
                                <path d="M0 25 Q20 5 40 20 T80 15 T120 20 V40 H0 Z" fill="rgba(232,113,58,0.1)" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Charts Row */}
                <div className="charts-row">
                    {/* Sales Analytics */}
                    <div className="chart-card sales-analytics">
                        <div className="chart-header">
                            <h3>Sales Analytics</h3>
                            <div className="chart-controls">
                                <button className={`toggle-btn ${chartMode === 'Monthly' ? 'active' : ''}`} onClick={() => setChartMode('Monthly')}>Monthly</button>
                                <button className={`toggle-btn ${chartMode === 'Annually' ? 'active' : ''}`} onClick={() => setChartMode('Annually')}>Annually</button>
                                <button className="more-btn">⋮</button>
                            </div>
                        </div>
                        <div className="chart-legend">
                            <span className="legend-item"><span className="legend-dot rent" />Property Rent <strong>110</strong></span>
                            <span className="legend-item"><span className="legend-dot sale" />Property Sale <strong>55</strong></span>
                        </div>
                        <div className="bar-chart">
                            <div className="y-axis">
                                {['15k', '12.5k', '10k', '7.5k', '5k', '1k', '0'].map((v) => (
                                    <span key={v}>{v}</span>
                                ))}
                            </div>
                            <div className="bars-container">
                                {months.map((m, i) => (
                                    <div key={m} className="bar-group">
                                        <div className="bar-wrapper">
                                            <div className="bar rent-bar" style={{ height: `${(rentData[i] / maxBar) * 100}%` }} />
                                            <div className="bar sale-bar" style={{ height: `${(saleData[i] / maxBar) * 100}%` }} />
                                        </div>
                                        <span className="bar-label">{m}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Property Overview */}
                    <div className="chart-card property-overview">
                        <div className="chart-header">
                            <h3>Property Overview</h3>
                            <button className="more-btn">⋮</button>
                        </div>
                        <div className="donut-chart">
                            <svg viewBox="0 0 120 120" className="donut-svg">
                                <circle cx="60" cy="60" r="50" fill="none" stroke="#f3f4f6" strokeWidth="16" />
                                <circle cx="60" cy="60" r="50" fill="none" stroke="#E8713A" strokeWidth="16"
                                    strokeDasharray="130 184" strokeDashoffset="0" transform="rotate(-90 60 60)" />
                                <circle cx="60" cy="60" r="50" fill="none" stroke="#1a1a2e" strokeWidth="16"
                                    strokeDasharray="100 214" strokeDashoffset="-130" transform="rotate(-90 60 60)" />
                                <circle cx="60" cy="60" r="50" fill="none" stroke="#d4d4d8" strokeWidth="16"
                                    strokeDasharray="84 230" strokeDashoffset="-230" transform="rotate(-90 60 60)" />
                            </svg>
                            <div className="donut-center">
                                <span className="donut-value">$12,500</span>
                                <span className="donut-label">Total Revenue</span>
                            </div>
                        </div>
                        <div className="donut-legend">
                            <div className="donut-legend-item">
                                <span className="dot" style={{ background: '#E8713A' }} />
                                <span>Apartments</span>
                                <span className="legend-value">$5,200</span>
                            </div>
                            <div className="donut-legend-item">
                                <span className="dot" style={{ background: '#1a1a2e' }} />
                                <span>Houses</span>
                                <span className="legend-value">$3,100</span>
                            </div>
                            <div className="donut-legend-item">
                                <span className="dot" style={{ background: '#d4d4d8' }} />
                                <span>Offices</span>
                                <span className="legend-value">$4,200</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Payments */}
                <div className="payments-section">
                    <div className="payments-header">
                        <h3>Recent Payments</h3>
                        <div className="payments-controls">
                            <div className="search-input-small">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                                <input type="text" placeholder="Search" />
                            </div>
                            <button className="filter-btn">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>
                                Filter
                            </button>
                            <button className="filter-btn">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" y1="9" x2="20" y2="9" /><line x1="4" y1="15" x2="20" y2="15" /><line x1="10" y1="3" x2="8" y2="21" /><line x1="16" y1="3" x2="14" y2="21" /></svg>
                                Sort by
                            </button>
                        </div>
                    </div>
                    <table className="payments-table">
                        <thead>
                            <tr>
                                <th><input type="checkbox" /></th>
                                <th>Payment ID</th>
                                <th>Property Info</th>
                                <th>Customer Name</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {paymentsData.map((p) => (
                                <tr key={p.id}>
                                    <td><input type="checkbox" /></td>
                                    <td className="payment-id">ID: {p.id}</td>
                                    <td className="property-info">
                                        <span className="prop-name">{p.property}</span>
                                        <span className="prop-addr">{p.address}</span>
                                    </td>
                                    <td className="customer-cell">
                                        <div className="customer-avatar">{p.customer.split(' ').map(n => n[0]).join('')}</div>
                                        <span>{p.customer}</span>
                                    </td>
                                    <td>{p.amount}</td>
                                    <td>
                                        <span className={`status-badge ${p.status.toLowerCase()}`}>{p.status}</span>
                                    </td>
                                    <td><button className="more-btn">⋮</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>

            {/* Right Sidebar */}
            <aside className="right-sidebar">
                <div className="right-sidebar-header">
                    <h3>My Properties</h3>
                    <button className="filter-btn-small">
                        Recent
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                    </button>
                </div>
                <div className="property-list">
                    {properties.map((prop) => (
                        <div key={prop.name} className="property-card">
                            <div className="property-image">
                                <img src={prop.img} alt={prop.name} />
                            </div>
                            <div className="property-details">
                                <div className="property-price-row">
                                    <span className="property-price">{prop.price}</span>
                                    <span className="property-price-label">{prop.label}</span>
                                    <button className="more-btn">⋮</button>
                                </div>
                                <h4 className="property-name">{prop.name}</h4>
                                <p className="property-location">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                    {prop.location}
                                </p>
                                <div className="property-features">
                                    <span>🛏 {prop.beds} Bed</span>
                                    <span>🛁 {prop.baths} Bath</span>
                                    <span>📐 {prop.sqft} Sqft</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </aside>
        </div>
    );
}
