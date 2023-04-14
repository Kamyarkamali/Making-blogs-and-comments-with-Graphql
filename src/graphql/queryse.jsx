import {gql} from "@apollo/client"

const GET_BLOGS_INFO=gql`
query{
  posts {
    author {
      name
      avatar {
        url
      }
    }
    title
    slug
    id
    coverPhto {
      url
    }
  }
}
`

export const GET_AUTHORS_INFO=gql`
query{
  authors {
    id
    name
    slug
    avatar {
      url
    }
  }
}
`

export const GET_AVATAR=gql`
query MyQuery {
  authors {
    avatar {
      url
    }
  }
}
`
export const GET_AUTHOR=gql`
query getAuthor($slug:String!) {
  author(where: {slug:$slug}) {
    avatar {
      url
    }
    field
    name
    description {
      html
    }
    posts {
      coverPhto {
        url
      }
      id
      title
      slug
    }
  }
}
`

export const GET_POST=gql`
query getPost($slug:String!) {
  post(where: {slug: $slug}) {
    author {
      avatar {
        url
      }
      name
      field
    }
    content {
      html
    }
    title
    coverPhto {
      url
    }
  }
}
`

export const GET_COMMENT=gql`
query getcomments($slug:String!) {
  comments(where: {post: {slug:$slug}}) {
    id
    name
    text
  }
}

`

export default GET_BLOGS_INFO;