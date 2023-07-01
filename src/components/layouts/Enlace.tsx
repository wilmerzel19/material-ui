
import { Link } from 'react-router-dom'
type Props = {
    text: string,
    route: string
}

export default function Enlace(props: Props) {
  return (
    <Link to={props.route}>
      {props.text}
    </Link>
    
  )
}