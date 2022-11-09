import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </Provider>
        </BrowserRouter>
      );
}

export default App;