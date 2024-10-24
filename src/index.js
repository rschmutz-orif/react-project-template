import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from './components/layouts/main';
import SettingsLayout from './components/layouts/settings';

// Components 
import SettingsForm from './components/modules/settings/form';
import PostItsBoard from './components/modules/post-its/list/board';
import PostItsGrid from './components/modules/post-its/list/grid';
import PostItsTable from './components/modules/post-its/list/table';

// Contexts provider
import SearchProvider from './components/modules/search/provider';

// Utils
import Redirect from './utils/Redirect'

// Styles
import './index.pcss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<BrowserRouter>
  <SearchProvider>
    <Routes>
      
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Redirect to="/board" />} />
        <Route path="board" element={<PostItsBoard />} />
        <Route path="grid" element={<PostItsGrid />} />
        <Route path="table" element={<PostItsTable />} />
        <Route path="*" element={<Redirect to="/board" />} />
      </Route>

      <Route path="/settings" element={<SettingsLayout />}>
        <Route index element={<SettingsForm />} />
      </Route>

    </Routes>
  </SearchProvider>
</BrowserRouter>);



/*
const App = () => {
  const [text, setText] = useState('');
  const [postIts, setPostIts] = useState([]);

  // Charger les post-its au démarrage
  useEffect(() => {
    const fetchData = async () => {
      const storedPostIts = await getPostIts();
      setPostIts(storedPostIts);
    };
    fetchData();
  }, []);

  // Ajouter un post-it
  const handleAddPostIt = async () => {
    if (text.trim()) {
      const newPostIt = { text };
      await addPostIt(newPostIt);
      setPostIts([...postIts, newPostIt]);
      setText('');
    }
  };

  // Supprimer un post-it
  const handleDeletePostIt = async (id) => {
    await deletePostIt(id);
    setPostIts(postIts.filter(postIt => postIt.id !== id));
  };

  return (
    <div className="App">
      <h1>Post-it Virtuels</h1>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Écris quelque chose..."
        />
        <button onClick={handleAddPostIt}>Ajouter</button>
      </div>

      <div className="post-it-container">
        {postIts.map(postIt => (
          <div key={postIt.id} className="post-it">
            <p>{postIt.text}</p>
            <button onClick={() => handleDeletePostIt(postIt.id)}>Supprimer</button>
          </div>
        ))}
      </div>
    </div>
  );
};
*/