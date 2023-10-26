import { useAuth } from "./CurrentUserContext";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { postComment } from "../../../api";
import "../css/CommentAdder.css"



    function CommentAdder({ setComments }) {
        const { restaurantId } = useParams();
        const { user } = useAuth();
        const [description, setDescription] = useState("");
        const [errorMessage, setErrorMessage] = useState("");
      
        function handleSubmit(e) {
          e.preventDefault();
          if (user) {
            const author = user[0].username;
            const commentObject = {
              author: author,
              description: description,
            };
      

            postComment(commentObject, restaurantId).then((postedComment) => {
             setComments((currentComments) => {
                return [postedComment[0], ...currentComments];
              });
            }, [setComments]);
    
            setDescription("");
            setErrorMessage("");
          }
          else {
            setErrorMessage("Please log in to comment.");
          }
        }

    return (
        <main id="comment-poster">
        <h2>Post a comment</h2>
    <form className="comment-adder" onSubmit={handleSubmit}>
        <label htmlFor="post-comment" id='comment'> Add your comment here:</label>
        <textarea id="post-comment" value={description} onChange={(e) => {
            setDescription(e.target.value)
        }} />
        <button id='add-comment-button'>Add Comment</button>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </form>
    </main>
    )
}


export default CommentAdder