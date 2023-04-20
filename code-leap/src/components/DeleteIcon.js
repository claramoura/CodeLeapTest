import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashArrowUp } from '@fortawesome/free-solid-svg-icons';

function DeleteIcon(props) {
  return (
    <>
    <FontAwesomeIcon 
      icon={faTrashArrowUp} 
      style={{float: 'right', color: '#fff'}}
      onClick={props.onClick} 
    />
    </>
  );
}

export default DeleteIcon;