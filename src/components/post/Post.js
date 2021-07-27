import { Link } from "react-router-dom";
import './post.css';

export default function Post(props){
    let postId = 112;
    return(<div className='post'>
            <img className='postImg' src={props.img}></img>
            <div className='postInfo'>
                <div className='postCats'>
                    <span className='postCat'>Life</span>
                    <span className='postCat'>Music</span>
                </div>
                <Link to={`/post/${postId}`} className="link">
          <span className="postTitle">Post Title</span>
        </Link>
                <hr/>
                <span className='postDate'> 1 hours ago </span>
            </div>
            <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>);
}