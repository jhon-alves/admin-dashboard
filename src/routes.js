import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { DashboardPage } from './pages/DashboardPage';
import { TeamPage } from './pages/TeamPage';
import { ContactsPage } from './pages/ContactsPage';
import { InvoicesPage } from './pages/InvoicesPage';
import { FormPage } from './pages/FormPage';
import { CalendarPage } from './pages/CalendarPage';
import { FaqPage } from './pages/FaqPage';
import { BarPage } from './pages/BarPage';
import { PiePage } from './pages/PiePage';
import { LinePage } from './pages/LinePage';
import { GeographyPage } from './pages/GeographyPage';

export function MyRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<DashboardPage />} />
      <Route exact path="/team" element={<TeamPage />} />
      <Route exact path="/contacts" element={<ContactsPage />} />
      <Route exact path="/invoices" element={<InvoicesPage />} />
      <Route exact path="/form" element={<FormPage />} />
      <Route exact path="/calendar" element={<CalendarPage />} />
      <Route exact path="/faq" element={<FaqPage />} />
      <Route exact path="/bar" element={<BarPage />} />
      <Route exact path="/pie" element={<PiePage />} />
      <Route exact path="/line" element={<LinePage />} />
      <Route exact path="/geography" element={<GeographyPage />} />
    </Routes>
  );
}