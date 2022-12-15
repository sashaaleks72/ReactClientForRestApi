import { Link } from "react-router-dom";

const CatalogItemComponent = (props) => {
    return (
        <div className="col-4">
            <div className="card">
                <Link
                    to={`/teapots/edit-product/${props.id}`}
                    className="del_underline d-inline"
                >
                    <div className="text-end">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2356/2356780.png"
                            alt="edit"
                            width="35"
                        />
                    </div>
                </Link>
                <Link to={`/teapots/${props.id}`} className="del_underline">
                    <div className="text-center">
                        <img
                            src={props.imgUrl}
                            style={{ height: "200px" }}
                            alt="product"
                        />
                    </div>
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.price} UAH</p>
                    <div className="btn btn-primary" onClick={() => {}}>
                        Add to cart
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatalogItemComponent;
