import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (!token) {
      navigate("/login");
      return;
    }

    if (userData) {
      setUser(JSON.parse(userData));
    }

    // Fetch dashboard data
    fetchDashboardData(token);
  }, [navigate]);

  const fetchDashboardData = async (token) => {
    try {
      const response = await api.get("/api/dashboard-data", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        setDashboardData(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      if (error.response?.status === 401) {
        handleLogout();
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div>Loading dashboard...</div>
      </div>
    );
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "1200px",
        margin: "0 auto",
        background: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "white",
          padding: "1.5rem",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          marginBottom: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "#333", margin: 0 }}>Dashboard</h1>
        <button
          onClick={handleLogout}
          style={{
            background: "#dc3545",
            color: "white",
            border: "none",
            padding: "0.75rem 1.5rem",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Logout
        </button>
      </div>

      {/* Welcome Message */}
      {dashboardData && (
        <div
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            padding: "2rem",
            borderRadius: "10px",
            marginBottom: "2rem",
          }}
        >
          <h2 style={{ margin: 0 }}>{dashboardData.welcomeMessage}</h2>
          <p style={{ margin: "0.5rem 0 0 0", opacity: 0.9 }}>
            Last login: {new Date(dashboardData.lastLogin).toLocaleDateString()}
          </p>
        </div>
      )}

      {/* User Information Card */}
      <div
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          marginBottom: "2rem",
        }}
      >
        <h3 style={{ marginBottom: "1.5rem", color: "#333" }}>
          User Information
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1rem",
          }}
        >
          <div
            style={{
              padding: "1rem",
              background: "#f8f9fa",
              borderRadius: "5px",
            }}
          >
            <strong>Username:</strong>
            <p style={{ margin: "0.5rem 0 0 0" }}>{user.username}</p>
          </div>
          <div
            style={{
              padding: "1rem",
              background: "#f8f9fa",
              borderRadius: "5px",
            }}
          >
            <strong>Email:</strong>
            <p style={{ margin: "0.5rem 0 0 0" }}>{user.email}</p>
          </div>
          <div
            style={{
              padding: "1rem",
              background: "#f8f9fa",
              borderRadius: "5px",
            }}
          >
            <strong>User ID:</strong>
            <p style={{ margin: "0.5rem 0 0 0" }}>{user.id}</p>
          </div>
        </div>
      </div>

      {/* Statistics Card */}
      {dashboardData && (
        <div
          style={{
            background: "white",
            padding: "2rem",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginBottom: "1.5rem", color: "#333" }}>
            Account Statistics
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
            }}
          >
            <div
              style={{
                padding: "1.5rem",
                background: "#e3f2fd",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              <h4 style={{ color: "#1976d2", margin: "0 0 0.5rem 0" }}>
                Login Count
              </h4>
              <p
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  margin: 0,
                  color: "#1976d2",
                }}
              >
                {dashboardData.userStats.loginCount}
              </p>
            </div>
            <div
              style={{
                padding: "1.5rem",
                background: "#e8f5e8",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              <h4 style={{ color: "#388e3c", margin: "0 0 0.5rem 0" }}>
                Member Since
              </h4>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  margin: 0,
                  color: "#388e3c",
                }}
              >
                {new Date(
                  dashboardData.userStats.accountCreated
                ).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
