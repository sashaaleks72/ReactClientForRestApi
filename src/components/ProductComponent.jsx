import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { catalog } from "../App";
import { delProductById, getProductById } from "../http/fetches";

const ProductComponent = observer(() => {
    const { id } = useParams();
    const [product, setProduct] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const init = async () => {
            const recievedProduct = await getProductById(id);
            setProduct(recievedProduct);
        };

        init();
    }, []);

    return (
        <div>
            <div className="fs-2 text-center mb-2">Product description</div>
            <div className="fs-4 mb-2">
                <b>Title: </b>
                {product?.title}
            </div>
            <div className="fs-4 mb-2">
                <b>Price: </b>
                {product?.price} UAH
            </div>
            <div className="fs-4 mb-2">
                <b>Quantity: </b>
                {product?.quantity}
            </div>
            <div className="fs-4 mb-2">
                <b>Manufacturer country: </b>
                {product?.manufacturerCountry}
            </div>
            <div className="fs-4 mb-2">
                <b>Warranty: </b>
                {product?.warrantyInMonths} months
            </div>
            <div className="fs-4 mb-2">
                <b>Capacity: </b>
                {product?.capacity} l
            </div>
            <div className="fs-4 mb-4">
                <b>Description: </b>
                {product?.description}
            </div>
            <div className="text-center mb-4">
                <img src={product?.imgUrl} alt="product" />
            </div>
            <div className="text-center">
                <div className="btn btn-primary" onClick={() => {}}>
                    Add to cart
                </div>
                <div
                    className="btn btn-danger ms-2"
                    onClick={async () => {
                        if (product) {
                            await delProductById(id);
                            catalog.delProductById(product.id);

                            navigate(-1);
                        }
                    }}
                >
                    X
                </div>
            </div>
            <div
                className="text-end text-primary text-decoration-underline"
                role="button"
                onClick={() => {
                    navigate(-1);
                }}
            >
                Go to catalog
            </div>
        </div>
    );
});

export default ProductComponent;
