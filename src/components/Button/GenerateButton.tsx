import s from './CustomButton.module.scss'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
    onClick: () => void;
}

const GenerateButton = ({ onClick }: Props) => {

    return (
        <button className={s.greencontainer} onClick={onClick}>
            <FontAwesomeIcon icon={faPlay} />
            <p>Generate</p>
        </button>
    )
}

export default GenerateButton