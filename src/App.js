import "./styles.css";
import { Footer, Nav, InitData } from "./component";
import { BrowserRouter , Navigate, Route, Routes, HashRouter } from "react-router-dom";
import { Home, Login, Question, Page404, Essay} from "./page";
import { AuthContext } from "./context/AuthContext";
import ListLoginUser from "./page/listLoginUser/ListLoginUser";
import { useContext } from "react";
import Test from "./page/test/Test";
import List from "./component/admin/listUser/List";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const { user, status, admin } = useContext(AuthContext)
  return (
    <>
      <HashRouter>
        <Nav />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="max-w-screen-xl min-h-screen mx-auto pt-20">
          <div className="w-full">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/test/init" element={user && status ? <InitData /> : <Navigate to='/' />}></Route>
              <Route path="/test/login" element={user ? <Navigate to='/' /> : <Login />}></Route>
              <Route path="/test/question/:id" element={<Question />}></Route>
              <Route path="/test/essay/:id" element={<Essay />}></Route>
              <Route path="/test/test" element={<Test />}></Route>
              <Route path="/test/list-user" element={admin ? <List /> : <Navigate to='/' />}></Route>
              <Route path="/test/*" element={<Page404 />} ></Route>
            </Routes></div>
        </div>
        <Footer />
      </HashRouter>
    </>
  );
}
