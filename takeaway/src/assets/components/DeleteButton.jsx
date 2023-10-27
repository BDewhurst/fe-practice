import { AiFillDelete } from "react-icons/ai"
import { useAuth } from "./CurrentUserContext"
import { deleteComment } from "../../../api";
import { getCommentsById } from "../../../api";
import { useParams } from "react-router-dom";


function DeleteButton({ comment_id, author, setComments}) {

  const { restaurantId } = useParams() 
  const { user } = useAuth();

  const handleDelete = () => {
    deleteComment(comment_id).then(() => {
        getCommentsById(restaurantId).then((updatedComments) => {
            setComments(updatedComments)
        })
    })
  };

  if (user && user[0].username === author) {
    return <AiFillDelete onClick={handleDelete} />;
  } else {

    return null;
  }
}

export default DeleteButton;
