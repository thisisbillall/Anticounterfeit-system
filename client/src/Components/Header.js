import { Link } from "react-router-dom"

const Header=()=>{
    return(
        <div>
            <Link to={"/track"}>Track Product</Link>
        </div>
    )
}
export default Header