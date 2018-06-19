import React from 'react';
import { connect } from 'react-redux'
import {
  Divider,
  Header,
  Container,
  Table,
  Button,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PostForm from './PostForm'

class Post extends React.Component {
  state = { showForm: false }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  render() {
    const { post = {} } = this.props
    const { showForm } = this.state
    return(
      <Container>
        <Link to="/posts">View All Posts</Link>
        <Divider/>
        <Button onClick={this.toggleForm}>
          { showForm ? 'Cancel' : 'Edit' }
        </Button>
        { showForm ?
            <PostForm closeForm={this.toggleForm} {...post} />
            :
            <div>
              <Table>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Author: </Table.Cell>
                    <Table.Cell>{post.author}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Body: </Table.Cell>
                    <Table.Cell>{post.body}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
        }
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => {
  return { post: state.posts.find( p => p.id === parseInt(props.match.params.id )) }
}

export default connect(mapStateToProps)(Post);