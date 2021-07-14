import './IdeaDetail.css';
import { useParams,useHistory,Link } from "react-router-dom";
import useFetch from './useFetch.js';

const IdeaDetail = () => {

    const {id} = useParams();
    console.log(id);
    const { data: idea, error, isPending } = useFetch('http://localhost:5000/ideas/' + id);
    const history = useHistory();

    function handleDelete(){
        fetch('http://localhost:5000/ideas/' + idea._id, {
        method: 'DELETE'
        }).then(() => {
            alert("Deleted successfully!");
            history.push('/');
        }) 
    }

    return (

        <div className="detail-base pt-20">

        { isPending && <div className="text-center text-red text-xl text-white">Loading...</div> }
        { error && <div className="text-center text-red-500">{ error }</div> }
        
        {idea && <div className="details mx-6 sm:mx-16 md:mx-32 lg:mx-60 p-4 sm:p-12 md:p-16 rounded">

            <div className="detail-header">
            <h1 className="head-detail text-3xl text-blue-700 font-bold">{idea.title}</h1>
            <ul className="detail-options block text-center mx-auto mt-6">
                <Link to={`/ideas/${idea._id}/edit`}>
                <i className="fas fa-pen text-white px-4 text-lg cursor-pointer"></i>
                </Link>
            <i className="fas fa-trash text-white px-4 cursor-pointer" onClick = {handleDelete}></i>
            </ul>
            </div>
            
            <p className="body-detail text-lg mt-4 sm:mt-10 text-white">
                {idea.body}
            </p>
        </div>}
        </div>

    
    );
}
 
export default IdeaDetail;