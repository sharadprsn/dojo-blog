

import useFetch  from "../hooks/useFetch"
import BlogList from "./BlogList";

const Home = () =>{

    const blogsUrl = 'http://localhost:8000/blogs';

    const {data: blogs, isPending, error} = useFetch(blogsUrl);
    
    return(
<div className="home">
    { error && <span>{error}</span>}
    { isPending && <span>Loading...</span>}
   {blogs && <BlogList blogs={ blogs } title="react is good"/>}
</div>
    );
}

export default Home;