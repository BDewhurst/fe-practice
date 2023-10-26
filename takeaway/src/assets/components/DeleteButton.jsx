import { AiFillDelete } from "react-icons/ai"
import { useAuth } from "./CurrentUserContext"
import { deleteComment } from "../../../api";
import { getCommentsById } from "../../../api";


function DeleteButton({ comment_id, author, comments, setComments}) {

  const { user } = useAuth();

  const handleDelete = () => {
    deleteComment(comment_id).then(() => {
        getCommentsById(comment_id).then((updatedComments) => {
            setComments(updatedComments)
        })
    }, [comments])
  };

  if (user && user[0].username === author) {
    return <AiFillDelete onClick={handleDelete} />;
  } else {

    return null;
  }
}

export default DeleteButton;
