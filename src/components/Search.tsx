type SearchProps = {
    loadUser: (userName:string) => Promise<void>
}

import {useState, KeyboardEvent} from 'react'
import {FaSearch} from "react-icons/fa"
import styles from './Search.module.css'

export default function Search({loadUser}: SearchProps){

    const [userName, setUserName] = useState("")

    //Fazer o input entrar apertando o enter no teclado.
    const handleKeyDown = (e:KeyboardEvent) => {
        if(e.key === "Enter"){
            loadUser(userName)
        }
    }

    return(
        <div className={styles.main}>
            <h2>Procure por um usuário do GitHub</h2>
            <div>
                <input 
                    type="text" 
                    placeholder="Digite o nome do usuário" 
                    onChange ={(e)=> setUserName(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={()=>loadUser(userName)}>
                    <FaSearch/>
                </button>
            </div>
        </div>
    )
}