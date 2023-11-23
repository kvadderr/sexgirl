import s from './Advantages.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  icon: any;
  text: string;
}
const Advantages = ({icon, text}: Props) => {
  return (
    <div className={s.container}>
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </div>
  )
}

export default Advantages