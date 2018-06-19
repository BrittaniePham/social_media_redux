import React from 'react';
import { connect } from 'react-redux'; //connects store and dispatch to props??
import { Link } from 'react-router-dom';
import { getPosts } from '../reducers/posts';
import { Container, Grid, Header, Card, Image } from 'semantic-ui-react';
import PostForm from './PostForm';

class Posts extends React.Component {

  posts = () => {
    return this.props.posts.map( post => 
      <Card key={post.id}>
        <Card.Content>
          <Card.Meta>
            <span>
              {post.author}
            </span>
          </Card.Meta>
          <Card.Description>
            {post.body}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/posts/${post.id}`}>
            View post
          </Link>
        </Card.Content>
      </Card>
    )
  }

  render() {
    return (
      <Container>
      <PostForm/>
        <Header as="h3" textAlign="center">Posts</Header>
        <Card.Group itemsPerRow={1}>
          { this.posts() }
        </Card.Group>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts }
}

export default connect(mapStateToProps)(Posts)