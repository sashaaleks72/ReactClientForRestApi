import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { catalog } from "../App";
import { getProducts } from "../http/fetches";
import CatalogItemComponent from "./CatalogItemComponent";

const CatalogComponent = observer(() => {
    useEffect(() => {
        const init = async () => {
            const products = await getProducts();
            catalog.setProductList(products);

            console.log(catalog.products[0].id);
        };

        init();
    }, []);

    return (
        <div className="m-4">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {catalog.products.map((item) => (
                    <CatalogItemComponent
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        imgUrl={item.imgUrl}
                    />
                ))}
            </div>
        </div>
    );
});

export default CatalogComponent;
