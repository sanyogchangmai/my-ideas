import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import './Ideas.css';

const Ideas = ({ideas}) => {

    const cardColor = ["bg-gradient-to-r from-green-400 to-blue-500","bg-gradient-to-r from-blue-500 via-blue-400 to-green-300"];

    console.log(cardColor[0]);

    const breakpointColumnsObj = {
        default: 3,
        1200: 2,
        400: 1
      };

    return (
        <div className="idea-base mx-4 mt-12 pl-4 sm:mx-8 lg:mx-64">
            <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
            >
            {ideas.map(idea => (
            <Link to={`/ideas/${idea._id}`}>
                <div key={ideas.id} className={`rounded my-4 p-8 ${cardColor[Math.floor(Math.random()*2)]}`}>
                <h4 className="idea-head text-2xl">{idea.title}</h4>
                    <p className="idea-body mt-4">
                    {idea.body}
                    </p>
                </div>
            </Link>
            ))}
            </Masonry>
            {/* </div>     */}
        </div>
    );
}
 
export default Ideas;