import './Home.css';
import Ideas from './components/Ideas/Ideas';
import useFetch from "./components/IdeaDetail/useFetch";

const Home = () => {
    const { error, isPending, data: ideas } = useFetch('http://localhost:5000')
    return (
        <div className="home">
      { error && <div className="text-2xl text-red-500 mt-44"><center>{ error }</center></div> }
      { isPending && <div className="text-2xl text-white mt-44">
        <center>
        <button type="button" className="bg-rose-600" disabled>
        <i className="fas fa-circle-notch animate-spin text-4xl mr-3"></i>
        Loading...
        </button>
        </center>
        </div> }
      { ideas && <Ideas ideas={ideas} /> }
    </div>
    );
}
 
export default Home;