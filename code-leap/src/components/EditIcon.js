import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

function EditIcon(props) {
  return (
    <>
    <FontAwesomeIcon 
      icon={faPenToSquare} 
      style={{float: 'right', marginLeft: '12px', color: '#fff'}}
      onClick={props.onClick} 
    />
    </>
  );
}

export default EditIcon;