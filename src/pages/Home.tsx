import {BsGithub} from "react-icons/bs"
import App from '../components/App'
import style from './Home.module.css'

export default function Home() {
    return(
        <div className={style.container}>
            <h1> <BsGithub /> GitFinder </h1>
            <App />
        </div>
    )
}