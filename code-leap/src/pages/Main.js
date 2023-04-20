import { useState, useEffect } from "react";
import { Container, Stack } from "react-bootstrap";
import Post from "../components/Post.js";
import NewPost from "../components/NewPost.js";
import axios from "axios";

function Main(props) {

  const [posts, setPosts] = useState([])
  const [fetched, setFetched] = useState(false)
  const [next, setNext] = useState(null)

  const user = props.user


  // Gets the first 10 posts
  useEffect(() => {
    async function fetchPosts() {
      const { data } = await axios.get("https://dev.codeleap.co.uk/careers/");
      setPosts(data.results);
      setNext(data.next);
      setFetched(true);
    }
    fetchPosts();
  }, [])

  // Handles infinite scroll
  // Adds more posts to posts array
  useEffect(() => {
    async function morePosts() {
      const { data } = await axios.get(next);
      setNext(data.next);
      let temp = posts;
      let newPosts = data.results;
      temp.push(...newPosts);
      setPosts(temp);
    }

    window.onscroll = () => {
      if ((window.innerHeight + window.scrollY >= document.body.offsetHeight) && next !== null) {
        morePosts();
      }
    };
  })

  return (
    <>
    <Container>
      <Stack gap={4} className="col-md-5 mx-auto">
        <NewPost user={user} />
        {fetched &&
          <>
          {posts.map((post, index) => <Post user={user} data={post} key={index} /> )}
          </>
        }
        {next === null && posts.length >= 10 &&
          <p style={{textAlign: "center"}}>You're all caught up!</p>
        }
      </Stack>
    </Container>
    </>
  );
}

export default Main;