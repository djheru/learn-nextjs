import { withRouter } from 'next/router';
import Layout from '../components/MyLayout';

const Content = withRouter(({ show: { name, summary, image } }) => (
  <div>
    <h1>{ name }</h1>
    <p>{ summary.replace(/<[/]?p>/g, '') }</p>
    <img src={image.medium} alt=""/>
  </div>
));

const Post = (props) => (
  <Layout>
    <Content show={props.show}/>
  </Layout>
);

Post.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();
  console.log('fetched show: ', show.name);
  return { show };
};

export default Post;
