import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { LandingPage } from './pages/LandingPage';
import { JobListingsPage } from './pages/JobListingsPage';
import { DesignersPage } from './pages/DesignersPage';
import { DesignerProfilePage } from './pages/DesignerProfilePage';
import { ProposalPage } from './pages/ProposalPage';
import { MessagesPage } from './pages/MessagesPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/jobs" element={<JobListingsPage />} />
            <Route path="/jobs/:id" element={<JobListingsPage />} />
            <Route path="/designers" element={<DesignersPage />} />
            <Route path="/designers/:id" element={<DesignerProfilePage />} />
            <Route path="/proposal/:id" element={<ProposalPage />} />
            <Route path="/messages" element={<MessagesPage />} />
          </Routes>
        </main>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}
