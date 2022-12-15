// const apiUrl = "http://localhost:44374/api";
const apiUrl = "https://localhost:44303/api";

export const getProducts = async () => {
    const result = await fetch(`${apiUrl}/teapots`);
    const products = await result.json();

    return products;
};

export const getProductById = async (id) => {
    const result = await fetch(`${apiUrl}/teapots/${id}`);
    const product = await result.json();

    return product;
};

export const delProductById = async (id) => {
    const requestOptions = {
        method: "DELETE",
    };

    await fetch(`${apiUrl}/teapots/${id}`, requestOptions);
};

export const addNewProduct = async (product) => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    };

    await fetch(`${apiUrl}/teapots`, requestOptions);
};

export const changeProduct = async (id, product) => {
    const requestOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    };

    await fetch(`${apiUrl}/teapots/${id}`, requestOptions);
};
