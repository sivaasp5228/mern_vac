import { useState, useEffect } from "react";
import axios from "axios";

//const useEffectAPI = () => {
//   var [posts, setPosts] = useState([]); /* for n numbers */
//    useEffect(() => {
//        axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
//            setPosts(res.data)
//            console.log(res);
//        }).catch((err) => {
//            console.log(err);
//        })
//    }, [posts])
//    return (
//        <div>
//            <h1>Use Effect API example JSON Placeholder</h1>
//            <h3>titles are:</h3>
//            <ol>
//                {posts.map((post) => (
//                    <li key={post.id}>{post.title}</li>
//                ))}
//            </ol>
//        </div>
//    )
//}

const useEffectAPI = () => {
    var [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            setUsers(res.data)
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }, [users])
    return (
        <div>
            <h1>Use Effect API example JSON Placeholder</h1>
            <h3>Names are:</h3>
            <ol>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ol>
            <h3>usernames are:</h3>
            <ol>
                {users.map((user) => (
                    <li key={user.id}>{user.username}</li>
                ))}
            </ol>
        </div>
    )
}

export default useEffectAPI;
