import { useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
   
   // let name = "mario";
   
   const [blogs, setBlogs] = useState ([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1},
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2},
    { title: "Web dev top tips", body: "lorem ipsum...", author: "mario", id: 3}

   ])

   
   const [name, setName] = useState("mario");
    const [age, setAge] = useState("25"); 

    const handleClick = () => {
        setName("luigi")
        setAge("12")
    } 

    const handleClickAgain = (name) => {
        console.log('hello' + name);
    }

    return ( 
        <div className="home">
            
            <BlogList blogs={ blogs} title="All Blogs!"/>
            <BlogList blogs={ blogs.filter((blog) => blog.author === "mario")} title="Mario's blogs"/>
            <h2>Homepage</h2>
            <p>{ name} is {age} years old</p>
            <button onClick={handleClick}>Click</button>
            <button onClick={(e) => handleClickAgain("mario", e)}>Click me again</button>
        </div>
     );
}
 
export default Home;