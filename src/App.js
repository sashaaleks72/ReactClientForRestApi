import { observer } from "mobx-react-lite";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CatalogComponent from "./components/CatalogComponent";
import HeaderComponent from "./components/HeaderComponent";
import ProductAddComponent from "./components/ProductAddComponent";
import ProductChangeComponent from "./components/ProductChangeComponent";
import ProductComponent from "./components/ProductComponent";
import { Catalog } from "./store/Catalog.store";

export const catalog = new Catalog();

const App = observer(() => {
    return (
        <BrowserRouter>
            <HeaderComponent />
            <div className="container">
                <Routes>
                    <Route path="/teapots" element={<CatalogComponent />} />
                    <Route path="/teapots/:id" element={<ProductComponent />} />
                    <Route
                        path="/teapots/edit-product/:id"
                        element={<ProductChangeComponent />}
                    />
                    <Route
                        path="/add-product"
                        element={<ProductAddComponent />}
                    />
                    <Route
                        path="*"
                        element={<Navigate replace to="/teapots" />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
});

export default App;
