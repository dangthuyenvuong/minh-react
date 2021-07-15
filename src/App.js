import './assets/style/custom.css'
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Contact from "./pages/Contact";
import LoginModal from './components/LoginModal';
import CourseDetail from './pages/CourseDetail';
import Profile from './pages/Profile';
import AuthProvider from './context/AuthContext'
import { Provider } from 'react-redux'
import { store } from './redux'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        {/* <AuthProvider> */}
        <MainLayout>
          <LoginModal />
          <Switch>
            {/* <Home /> */}
            <Route path="/khoa-hoc/:slug" exact component={CourseDetail} />
            <Route path="/" exact component={Home} />
            <Route path="/lien-he" exact component={Contact} />
            <Route path="/thong-tin-ca-nhan" component={Profile} />
            <Route component={Page404} />
          </Switch>
        </MainLayout>
        {/* </AuthProvider> */}
      </Provider>
    </BrowserRouter>
  );
}

export default App;
