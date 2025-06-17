import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './styles/App.css'; 
import App from './App'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/bren-alden_portofolio/"> {/* <--- PERIKSA INI */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
