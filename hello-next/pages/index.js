import Layout from '../components/MyLayout';
import Link from 'next/link';

const PostLink = ({id, title}) => (
  <li>
    <Link as={`/p/${id}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
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
          <PostLink id={id} title={title} key={i}/>
        ))
      }
    </ul>
  </Layout>
);

export default Index;
