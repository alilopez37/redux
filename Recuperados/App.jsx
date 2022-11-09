import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import UserContext from "../context/UserContext";
import store from "../redux/store";

function App() {
    const [isLogued, setIsLogued] = useState(false)

    return (
        <BrowserRouter>
            <UserContext.Provider value={{isLogued, setIsLogued}}>
                <Provider store={store}>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                </Provider>
            </UserContext.Provider>
        </BrowserRouter>
      );

    }


export default App;