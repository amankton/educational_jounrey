import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ChapterPage from './pages/ChapterPage';
import GlossaryPage from './pages/GlossaryPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ReferencesPage from './pages/ReferencesPage';
import ChecklistsPage from './pages/ChecklistsPage';
import SearchPage from './pages/SearchPage';
import { SearchProvider } from './contexts/SearchContext';

function App() {
  return (
    <SearchProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="guide/:chapterId" element={<ChapterPage />} />
          <Route path="glossary" element={<GlossaryPage />} />
          <Route path="references" element={<ReferencesPage />} />
          <Route path="checklists" element={<ChecklistsPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </SearchProvider>
  );
}

export default App;
