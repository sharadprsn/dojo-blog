import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div className="not-found">
            <h2>404</h2>
            <p>Requested page do not exist</p>
            <Link to="/">Back to home page</Link>
        </div>
    );
}
 
export default NotFound;