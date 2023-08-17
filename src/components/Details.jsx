import { Link } from "react-router-dom";
import { Context } from "../main";
import Content from "./Content"
import { useContext } from "react";


const Details = () => {
    const { res } = useContext(Context);
  return (
    <div>
        {
            res ? <Content/> : <Link to={'/'}><p className="text-2xl font-extrabold text-center mt-4">{`<< Go to Home`}</p></Link>
        }
    </div>
  )
}

export default Details