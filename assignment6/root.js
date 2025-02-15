// root.js

function PublicBlogPost(props) {
  return <li className="public-posts" style={{display: "block"}}>
    <BlogPost title={props.title} author={props.author} date={props.date} content={props.content} privateFlag={props.privateFlag} />
  </li>
}

function PrivateBlogPost(props) {
  return <li className="private-posts" style={{display: "block"}}>
    <BlogPost title={props.title} author={props.author} date={props.date} content={props.content} privateFlag={props.privateFlag} />
  </li>
}

function BlogList(props) {
  return <ul>
    {
      props.blogPosts.map(post => (
        post.private ? <PrivateBlogPost key={post.title} title={post.title} author={post.author} date={post.date} content={post.content} privateFlag="hide"/> : <PublicBlogPost key={post.title} title={post.title} author={post.author} date={post.date} content={post.content} privateFlag="unhide"/>
      ))
    }
  </ul>
}

function BlogPost(props) {
  if (props.privateFlag === "hide") {
    return <div>
      <h2>{props.title}</h2>
      <p>By {props.author} on {props.date}</p>
      <p>The content of this post is private</p>
    </div>
  } else {
    return <div>
      <h2>{props.title}</h2>
      <p>By {props.author} on {props.date}</p>
      <p>{props.content}</p>
    </div>
  }
}

function Header() {
  return <div>
    <h1>My Blog</h1>
    <p>A blog about everything</p>
  </div>
}

function Footer(props) {
  return <div>
    <p>&copy; {props.year} My Blog. All rights reserved.</p>
  </div>
};

function App() {
  const blogPosts = [
    {
      title: 'My First Blog Post',
      author: 'John Doe',
      date: 'June 1, 2023',
      content: 'Welcome to my first blog post! Today, I want to share my journey into the world of blogging. It has been an exciting experience so far, and I can’t wait to see where this path leads me.',
      private: true
    },
    {
      title: 'My Second Blog Post',
      author: 'Jane Smith',
      date: 'June 5, 2023',
      content: 'In this post, I’m discussing the importance of work-life balance. It’s essential to find time for both professional and personal activities to maintain overall well-being.',
      private: false
    },
    {
      title: 'A Day in the Life',
      author: 'Alice Johnson',
      date: 'June 10, 2023',
      content: 'Ever wondered what a day in my life looks like? Join me as I walk you through my daily routine, from morning coffee to evening relaxation.',
      private: false
    },
    {
      title: 'Tips for Healthy Eating',
      author: 'Bob Lee',
      date: 'June 15, 2023',
      content: 'Eating healthy doesn’t have to be complicated. Here are some simple and practical tips to help you make better food choices every day.',
      private: true
    },
    {
      title: 'Traveling on a Budget',
      author: 'Susan White',
      date: 'June 20, 2023',
      content: 'Dreaming of traveling the world but worried about the cost? This post covers my top tips for seeing new places without breaking the bank.',
      private: false
    }
  ];

  return <div>
    <header>
      <Header />
    </header>
    <div class="blog-list">
      <BlogList blogPosts={blogPosts} />
    </div>
    <footer>
      <Footer year="2024"/>
    </footer>
  </div>
};

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />)