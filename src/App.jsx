import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
// css here
import { AppHeader } from './comp/AppHeader.jsx'
// import { AppFooter } from './cmps/AppFooter'
import { HomePage } from './pages/HomePage.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { store } from './store/store.js'
import { ToyIndex } from './pages/ToyIndex.jsx'
import { ToyEdit } from './pages/ToyEdit.jsx'

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
            </Routes>
          </main>
          {/* <AppFooter /> */}
        </div>
      </Router>
    </Provider>
  )
}
