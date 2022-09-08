import Header from "../Header";
import { useCallback, useEffect, useState } from "react";
import { listarUsuario } from "../../services/Teste-API/usuarios";
import { useParams } from 'react-router-dom'
import baseAPI from "../../services/Teste-API/config/index";



import "../Perfil/styles.scss";

export default function Perfilcopy() {
  const [usuarios, setUsuarios] = useState()

  const { id } = useParams()


  const fetchUser = useCallback(async () => {
    const response = await baseAPI.get(`/GI7aAo/tweet/${id}`).then ((res) => {
      return res.data
    })

    setUsuarios(response)
  }, [setUsuarios, id]);

    useEffect(() => {
      fetchUser()
    }, [fetchUser])

  return (
    <>
      <Header />
        <h1>{usuarios?.nome}</h1>
      
    </>
  );
}