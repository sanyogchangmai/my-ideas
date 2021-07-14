import './Create.css';
import {useState} from 'react';
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const history = useHistory();

    function handleSubmit(e){
        e.preventDefault();
        const idea = {title,body};

        fetch('http://localhost:5000/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(idea)
        }).then(() => {
        alert('Idea added successfully!');
        history.push('/');
      })
    }

    return (
        <div className="create mt-16">
            <h1 className="form-title font-extrabold text-center text-3xl md:text-5xl mb-12 text-blue-600">Create your Idea Here!</h1>
            <center>
            <form onSubmit={handleSubmit}>
                    <input type="text" 
                    className="idea-title block w-3/4 lg:w-2/4 h-10 px-4 border border-transparent focus:outline-none rounded text-white" 
                    placeholder="Name your idea"
                    name="title"
                    value={title}
                    onChange = {(e) => setTitle(e.target.value)}
                    required/>
                    <br />
                    <textarea
                     className="description w-3/4 lg:w-2/4 px-4 py-3 border border-transparent focus:outline-none rounded text-white"
                     name="body" id="desc"
                     value={body}
                     onChange = {(e) => setBody(e.target.value)}
                     cols="30" rows="10" placeholder="Write about your idea" required></textarea>
                    <br />
                    <button
                     class="py-2 px-4 font-semibold rounded shadow-md text-white bg-blue-600 hover:bg-blue-700 mt-3 px-6"
                     >
                         Create Idea
                    </button>
                </form>
            </center>          
        </div>
    );
}
 
export default Create;