const data = [
    {
        id: 1,
        name: 'Jane Doe',
        email: 'jane.doe@gmail.com',
        password: '123456',
    }
]

//listar
export const findAll = () =>{
    return data;
};

//=== compara tanto el tipo y valor
//== compara solo el valor
//buscar por id
export const findOne = (id) =>{
    return data.find((u)=> u.id === Number(id));
};

//crear
export const store = (user) => {
    let end = data.length - 1
    let newData = data[end]
    
    
    user.id = newData.id + 1;
    data.push(
        user
    );
}

//update
export const update = (id, user) => {
    const index = data.findIndex((u)=> u.id === Number(id));
    let newData = data[index];
    user.id = newData.id;
    data[index] = {
        //antiguo
        ...data[index],
        //chancamos al antiguo con la nueva data
        ...user
    }
}

//remove
//data.length = 0; limpiar el array
export const remove = (id) => {
    const users = data.filter((u)=> u.id !== Number(id));
    data.length = 0;
    data.push(...users);
}
