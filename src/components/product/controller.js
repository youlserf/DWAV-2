//vamos a crear un  crud
//importamos db
import * as DB from "../../db/product"

//listar
export const findAll = (req, res) => {
    return res.json({
        ok: true,
        data: DB.findAll(),
    })
};

//buscar
export const findOne = (req, res) => {
    //indicamos que solo extraemos el parametro id de lo que se capta en la url
    const { id } = req.params;

    return res.json({
        ok: true,
        data: DB.findOne(id)
    })
}

//create
export const create  = (req, res) => {
    const { body } = req;
    
    DB.store(body)

    return res.status(201).json({
        ok: true,
        data: "User created"
    })
}

//update
export const update = (req, res) => {
    const { id }  = req.params
    const { body } = req;
    
    DB.update(id, body)

    return res.json({
        ok: true,
        data: "User updated"
    })
}

//remove
export const remove  = (req, res) => {
    const { id }  = req.params

    DB.remove(id)

    return res.json({
        ok: true,
        data: "User deleted"
    })
}

