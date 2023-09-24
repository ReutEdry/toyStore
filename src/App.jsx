import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import './assets/style/main.css'
import { AppHeader } from './comp/AppHeader.jsx'
// import { AppFooter } from './cmps/AppFooter'
import { HomePage } from './pages/HomePage.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { store } from './store/store.js'
import { ToyIndex } from './pages/ToyIndex.jsx'
import { ToyEdit } from './pages/ToyEdit.jsx'
import { Dashboard } from './pages/Dashboard.jsx'

export function App() {
  return (
    <Provider store={store} >
      <Router>
        <div>
          <AppHeader />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/toy" element={<ToyIndex />} />
              <Route path="/toy/edit/:toyId" element={<ToyEdit />} />
              <Route path="/toy/edit" element={<ToyEdit />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
          {/* <AppFooter /> */}
        </div>
      </Router>
    </Provider>
  )
}
