
export function PostsIndex(props) {
  console.log(props.posts);

  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <img src={post.image} />
          <p>Author: {post.user_id}</p>
          {/* <p>{post.body}</p> */}
          <button onClick={() => props.onShowPost(post)}>More nonsense</button>
        <br />
        <br />
        <br />
        </div>

      ))}
    </div>
  );
}
