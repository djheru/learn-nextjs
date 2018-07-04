import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const PostLink = ({id, name}) => (
  <li>
    <Link as={`/p/${id}`} href={`/post?id=${id}`}>
      <a>{name}</a>
    </Link>
  </li>
);

const Index = (props) => (
  <Layout>
    <h1>Batman, Bitch!</h1>
    <ul>
      {
        props.shows.map(({ show: { id, name } }, i) => (
          <PostLink id={ id } name={ name } key={ i }/>
        ))
      }
    </ul>
  </Layout>
);

Index.getInitialProps = async function () {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const shows = await res.json();
  console.log('Show data fetched: ', shows.length);
  return { shows };
};

export default Index;
