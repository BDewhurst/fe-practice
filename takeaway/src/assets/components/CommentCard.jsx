import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getCommentsById } from "../../../api"
import format from "date-fns/format"
import {FaRegThumbsUp} from "react-icons/fa"
import "../css/Comment.css"
import CommentAdder from "./CommentAdder"

function CommentCard(){

const { restaurantId } = useParams() 

const [comments, setComments] = useState([])

useEffect(() => {
    getCommentsById(restaurantId).then((data) => {

        setComments(data)
    })
}, [])
    return (
      <main>
        <ul className="comments-list">
        
        {comments.map(({ comment_id, author, description, votes, created_at}) => (
          <li key={comment_id} className="comment">
          
              
               <p id="description">{description}</p>
               <p id="votes"> <FaRegThumbsUp/>{votes}</p>
               <p id="author">{author}</p>
               <p>{format(new Date(created_at), "MM/dd/yyyy HH:mm:ss")}</p>     
          </li>
         
        ))}
      </ul>
                  <CommentAdder setComments={setComments} />
                  </main>
)
}

export default CommentCard