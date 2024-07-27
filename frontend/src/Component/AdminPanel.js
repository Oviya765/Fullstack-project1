import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import UserView from '../Component/UserView';
import EditUsers from '../Component/EditUser';
import AddUsers from '../Component/AddUser';
import DeleteUsers from '../Component/DeleteUser';
import FeedbackAdmindash from '../Component/FeedBackadmindash';
// import Schedules from './Schedules';
import '../Assets/Styles/AdminPanel.css';

function AdminDashboard() {
  return (
    <div className="dashboard-container">
      <div className="side-panel">
        <h2>Admin Panel</h2>
        <nav>
          <ul>
            <li>
              <Link to="/admindashboard/view-users">
                <i className="fas fa-user nav-icon"></i>
                View Users
              </Link>
            </li>
            <li>
              <Link to="/admindashboard/edit-users">
                <i className="fas fa-edit nav-icon"></i>
                Edit Users
              </Link>
            </li>
            <li>
              <Link to="/admindashboard/add-users">
                <i className="fas fa-plus nav-icon"></i>
                Add Users
              </Link>
            </li>
            <li>
              <Link to="/admindashboard/delete-users">
                <i className="fas fa-trash nav-icon"></i>
                Delete Users
              </Link>
            </li>
            <li>
              <Link to="/admindashboard/feedback">
                <i className="fas fa-comment-dots nav-icon"></i>
                Feedback
              </Link>
            </li>
            <li>
              <Link to="/admindashboard/schedules">
                <i className="fas fa-calendar nav-icon"></i>
                Schedules
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <Routes>
          <Route path="view-users" element={<UserView />} />
          <Route path="edit-users" element={<EditUsers />} />
          <Route path="add-users" element={<AddUsers />} />
          <Route path="delete-users" element={<DeleteUsers />} />
          <Route path="feedback" element={<FeedbackAdmindash />} />
          {/* <Route path="schedules" element={<Schedules />} /> */}
          <Route path="/" element={<DefaultContent />} />
        </Routes>
      </div>
    </div>
  );
}

const DefaultContent = () => (
  <div className="card-container">
    <div className="card notification-card">
      <h3>Notifications</h3>
      <p><strong>System Update:</strong> The system will undergo maintenance on Friday at 3 PM.</p>
      <p><strong>New User:</strong> A new user has signed up. Check the user management section for details.</p>
    </div>
    <div className="card update-card">
      <h3>Daily Updates</h3>
      <p><strong>Today’s Tasks:</strong> Review new feedback, check interview schedules, and update user profiles.</p>
      <p><strong>Pending Actions:</strong> Approve new interview requests and verify user credentials.</p>
    </div>
    <div className="card stats-card">
      <h3>Statistics</h3>
      <p><strong>Total Users:</strong> 350</p>
      <p><strong>Upcoming Interviews:</strong> 12</p>
      <p><strong>Recent Feedback:</strong> 25 new feedbacks</p>
    </div>
  </div>
);

export default AdminDashboard;
