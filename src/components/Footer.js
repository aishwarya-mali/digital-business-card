import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodepen, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer(){
    return(
        <footer>
            <a href='https://codepen.io/aishwaryamali24'><FontAwesomeIcon icon={faCodepen}/></a>
            <a href='https://github.com/aishwarya-mali'><FontAwesomeIcon icon={faGithub}/></a>
        </footer>
    )
}
