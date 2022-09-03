const data = [
    {
        id: 1,
        name: 'Cheese tris',
        stock: 12,
        precio: 12.5,
    }
]

export const findAll = () =>{
    return data;
};

export const findOne = (id) =>{
    return data.find((u)=> u.id === Number(id));
};

export const store = (product) => {
    let end = data.length - 1
    let newData = data[end]
    
    
    product.id = newData.id + 1;
    data.push(
        product
    );
}

export const update = (id, product) => {
    const index = data.findIndex((u)=> u.id === Number(id));
    let newData = data[index];
    product.id = newData.id;
    data[index] = {
        ...data[index],
        ...product
    }
}

export const remove = (id) => {
    const products = data.filter((u)=> u.id !== Number(id));
    data.length = 0;
    data.push(...products);
}
