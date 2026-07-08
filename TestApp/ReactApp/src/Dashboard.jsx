export default function Dashboard() {
  const stats = [
    {
      id: 1,
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1% from last month",
      icon: "💰",
    },
    {
      id: 2,
      title: "Subscriptions",
      value: "+2,350",
      change: "+180.1% from last month",
      icon: "👥",
    },
    {
      id: 3,
      title: "Sales",
      value: "+12,234",
      change: "+19% from last month",
      icon: "📉",
    },
    {
      id: 4,
      title: "Active Now",
      value: "+573",
      change: "+201 since last hour",
      icon: "⏱️",
    },
  ];

  // Mock data for recent transactions table
  const recentActivity = [
    {
      id: "INV-001",
      user: "Olivia Martin",
      email: "olivia@email.com",
      amount: "+$1,999.00",
      status: "Paid",
    },
    {
      id: "INV-002",
      user: "Jackson Lee",
      email: "jackson@email.com",
      amount: "+$39.00",
      status: "Paid",
    },
    {
      id: "INV-003",
      user: "Isabella Nguyen",
      email: "isabella@email.com",
      amount: "+$299.00",
      status: "Pending",
    },
    {
      id: "INV-004",
      user: "William Kim",
      email: "will@email.com",
      amount: "+$99.00",
      status: "Paid",
    },
    {
      id: "INV-005",
      user: "Sofia Davis",
      email: "sofia@email.com",
      amount: "+$39.00",
      status: "Failed",
    },
  ];
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🎉 Welcome to your Dashboard Workspace!</h1>
      <div className="dashboard-container">
        {/* 1. Sidebar Navigation */}
        <aside className="sidebar">
          <div className="sidebar-brand">
            <h2>Acme Corp</h2>
          </div>
          <nav className="sidebar-menu">
            <a href="#overview" className="menu-item active">
              📊 Overview
            </a>
            <a href="#analytics" className="menu-item">
              📈 Analytics
            </a>
            <a href="#customers" className="menu-item">
              👥 Customers
            </a>
            <a href="#products" className="menu-item">
              📦 Products
            </a>
            <a href="#settings" className="menu-item">
              ⚙️ Settings
            </a>
          </nav>
        </aside>

        {/* Main App Content Wrapper */}
        <div className="main-content">
          {/* 2. Header */}
          <header className="dashboard-header">
            <div className="header-search">
              <input type="search" placeholder="Search..." />
            </div>
            <div className="user-profile">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60"
                alt="User Profile"
                className="avatar"
              />
              <span className="username">Alex Morgan</span>
            </div>
          </header>

          {/* 3. Dashboard Body Grid */}
          <main className="dashboard-body">
            <div className="dashboard-intro">
              <h1>Dashboard</h1>
              <p className="date-text">Overview for your application health</p>
            </div>

            {/* Cards Grid */}
            <div className="stats-grid">
              {stats.map((stat) => (
                <div key={stat.id} className="stat-card">
                  <div className="stat-card-header">
                    <span className="stat-title">{stat.title}</span>
                    <span className="stat-icon">{stat.icon}</span>
                  </div>
                  <div className="stat-card-body">
                    <h2 className="stat-value">{stat.value}</h2>
                    <p className="stat-change">{stat.change}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Table Container Section */}
            <div className="activity-section">
              <h3>Recent Sales</h3>
              <p className="section-subtitle">You made 265 sales this month.</p>

              <div className="table-responsive">
                <table className="activity-table">
                  <thead>
                    <tr>
                      <th>Customer</th>
                      <th>Status</th>
                      <th className="text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentActivity.map((activity) => (
                      <tr key={activity.id}>
                        <td>
                          <div className="customer-info">
                            <p className="customer-name">{activity.user}</p>
                            <p className="customer-email">{activity.email}</p>
                          </div>
                        </td>
                        <td>
                          <span
                            className={`status-badge ${activity.status.toLowerCase()}`}
                          >
                            {activity.status}
                          </span>
                        </td>
                        <td className="text-right amount-text">
                          {activity.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
