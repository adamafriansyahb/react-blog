import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Oops...</h2>
            <p>Page could not be found</p>
            <div className="error-path">
                <Link className="btn" to="/">Back to the homepage</Link>
            </div>
        </div>
     );
}
 
export default NotFound;