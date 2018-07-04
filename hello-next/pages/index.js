import Layout from '../components/MyLayout';
import Link from 'next/link';

const arial = 'Arial';

const PostLink = ({ id, title }) => (
  <li>
    <Link as={ `/p/${id}` } href={ `/post?title=${title}` }>
      <a>{ title }</a>
    </Link>
    <style jsx>{ `
    li {
        list-style: none;
        margin: 5px 0;
        font-family: ${arial};
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    ` }</style>
  </li>
);

const posts = [
  { title: 'Hello Next.js', id: 'hello-nextjs' },
  { title: 'Learn Next.js is awesome', id: 'learn-nextjs' },
  { title: 'Deploy apps with Zeit', id: 'deploy-nextjs' }
];

const Index = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      {
        posts.map(({ id, title }, i) => (
          <PostLink id={ id } title={ title } key={ i }/>
        ))
      }
    </ul>
    <style jsx>{ `
      h1 {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }
    ` }</style>
  </Layout>
);

export default Index;
