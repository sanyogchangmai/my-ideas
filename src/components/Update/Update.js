import './Update.css';
import {useState} from 'react';
import { useHistory,useParams } from "react-router-dom";
import useFetch from './useFetch.js';
// import IdeaDetail from '../IdeaDetail/IdeaDetail';

const Update = () => {

    const { id } = useParams();
    const { data: idea ,isPending, error } = useFetch('http://localhost:5000/ideas/' + id);
    // console.log();

    // const [title, setTitle] = useState('');
    // const [body, setBody] = useState('');
    let title;
    let body;

    const history = useHistory(); 
    

    function handleSubmit(e){
        e.preventDefault();
        const idea = {title,body};

        fetch('http://localhost:5000/ideas/' + id, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(idea)
        }).then(() => {
        // alert(idea.title);
        history.push('/');
      })
    }

    return (
        <div className="create mt-16">
            <h1 className="form-title font-extrabold text-center text-3xl md:text-5xl mb-12 text-blue-600">Make your changes!</h1>
            <center>
            { isPending && <div className="text-center text-red text-xl text-white">Loading...</div> }
            { error && <div className="text-center text-red-500">{ error }</div> }
            {idea && <form onSubmit={handleSubmit}>
                    <input type="text" 
                    className="idea-title block w-3/4 lg:w-2/4 h-10 px-4 border border-transparent focus:outline-none rounded text-white" 
                    placeholder="Name your idea"
                    defaultValue={idea.title}
                    onChange = {(e) => title = e.target.value}
                    required/>
                    <br />
                    <textarea
                     className="description w-3/4 lg:w-2/4 px-4 py-3 border border-transparent focus:outline-none rounded text-white"
                     name="idea-text" id="desc"
                     defaultValue={idea.body}
                     onChange = {(e) => body = e.target.value}
                     cols="30" rows="10" placeholder="Write about your idea" required></textarea>
                    <br />
                    <button
                     class="py-2 px-4 font-semibold rounded shadow-md text-white bg-blue-600 hover:bg-blue-700 mt-3 px-6"
                     >
                         Create Idea
                    </button>
                </form>}
            </center>          
        </div>
    );
}
 
export default Update;