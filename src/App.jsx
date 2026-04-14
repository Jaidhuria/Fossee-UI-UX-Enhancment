import { Routes, Route, Navigate } from 'react-router-dom';
import PageShell from './components/PageShell';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import WorkshopTypeList from './pages/WorkshopTypeList';
import WorkshopTypeDetails from './pages/WorkshopTypeDetails';
import ProposeWorkshop from './pages/ProposeWorkshop';
import WorkshopDetails from './pages/WorkshopDetails';
import Register from './pages/Register';
import Profile from './pages/Profile';
import { useAuth } from './context/AuthContext';

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/auth/login" replace />;
}

export default function App() {
  return (
    <PageShell>
      <Routes>
        {/* Nested Auth Routes */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Register />} />
          <Route path="" element={<Navigate to="login" replace />} />
        </Route>

        {/* Public Workshop Routes */}
        <Route path="/workshops/types" element={<WorkshopTypeList />} />
        <Route path="/workshops/types/:id" element={<WorkshopTypeDetails />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/workshops/:id" element={<ProtectedRoute><WorkshopDetails /></ProtectedRoute>} />
        <Route path="/workshops/propose" element={<ProtectedRoute><ProposeWorkshop /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

        {/* Root Redirect */}
        <Route path="/" element={<Navigate to="/workshops/types" replace />} />
        
        {/* Fallbacks for old routes */}
        <Route path="/login" element={<Navigate to="/auth/login" replace />} />
        <Route path="/register" element={<Navigate to="/auth/signup" replace />} />
      </Routes>
    </PageShell>
  );
}
