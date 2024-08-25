import { useMutation, useQuery } from "@tanstack/react-query";

const POSTS = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
];

const wait = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const App = () => {
  const potsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...POSTS]),
  });

  const newPost = useMutation({
    mutationFn: (title) => {
      return wait(1000).then(() => {
        POSTS.push({ id: Math.random(), title });
      });
    },
  });

  if (potsQuery.isLoading) return <div>Loading...</div>;

  if (potsQuery.isError) return <pre>Something went wrong</pre>;

  return (
    <section>
      <div className="container">
        <h1>React Query Tutorial</h1>
        <div className="posts">
          {POSTS.map((item) => {
            return (
              <div className="post" key={item.id}>
                <p>{item.title}</p>
              </div>
            );
          })}
          <button
            onClick={() => {
              newPost.mutate("New Post");
            }}
          >
            Add New
          </button>
        </div>
      </div>
    </section>
  );
};

export default App;
