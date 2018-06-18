import React from 'react';
import { connect } from 'react-redux'
import { updatePost, addPost } from '../reducers/posts'
import { Form } from 'semantic-ui-react';

class PostForm extends React.Component {
  initialState = { 
    author: '',
    body: ''
  }

  state = {...this.initialState}

  componentDidMount() {
    if (this.props.id) 
      this.setState({ ...this.props })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const post = {...this.state}
    const { dispatch } = this.props
    const func = this.props.id ? updatePost : addPost
    dispatch(func(post))
  }

  render() {
    const { author, body } = this.props
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="author"
          defaultValue={author}
          onChange={this.handleChange}
          label="Author"
        />
        <Form.Input
          name="body"
          defaultValue={body}
          onChange={this.handleChange}
          label="body"
        />
        <Form.Button>Post</Form.Button>
      </Form>
    )
  }
}

export default connect()(PostForm);