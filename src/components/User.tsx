import { UserProps } from "../types/user"
import styles from "./User.module.css"
import {ImLocation} from "react-icons/im"
import { Link } from "react-router-dom"

export default function User({avatar_url,login,followers,following,location}:UserProps){
    return(
        <div className={styles.user}>
            <img src={avatar_url}></img>
            <h2>{login}</h2>
            <p><ImLocation className={styles.location} />{location}</p>
            <p> Seguidores: {followers}</p>
            <p> Seguindo: {following}</p>
            <a href={`https://github.com/${login}`}>ver perfil</a>
        </div>
    )
}