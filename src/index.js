import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Routes, Route, } from "react-router-dom";

// Layouts
import MainLayout from './components/layouts/main';
import SettingsLayout from './components/layouts/settings';

// Modules Components
import PostItsBoard from './components/modules/post-its/board';
import PostItsTable from './components/modules/post-its/table';
import SettingsForm from './components/modules/settings/form';

// Utils
import { addPostIt, getPostIts, deletePostIt } from './utils/db/post-its';

// Styles
import './index.pcss';

const container = document.getElementById('root');
const root = createRoot(container);

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

root.render(<BrowserRouter>
    <Routes>
      
        <Route path="/" element={<MainLayout />}>
            <Route index element={<PostItsBoard />} />
            <Route path="board" element={<PostItsBoard />} />
            <Route path="table" element={<PostItsTable />} /> 
        </Route>

        <Route path="/settings" element={<SettingsLayout />}>
            <Route index element={<SettingsForm />} />
        </Route>

        <Route path="*" element={<p> No matches</p>} />
    </Routes>
</BrowserRouter>);
