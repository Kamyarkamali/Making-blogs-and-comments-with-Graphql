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

export const GET_AUTHORS=gql`
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

export default GET_BLOGS_INFO;