import { UserContext } from "../../contextes/UserContext";
import axios from "axios";
import { useState, useContext } from "react";

function NewChar() {
    const { user } = useContext(UserContext)

    return user == null ? (
        <h1>Usuário não logado</h1>
    ) : (
        <h1>Personagens do :{user.name}</h1>
    )
}

export default NewChar