import {gql} from "@apollo/client"

const GET_BLOGS_INFO=gql`
query {
  authors {
    name
    avatar {
      url
    }
  }
  posts {
    coverPhto {
      id
    }
    title
    slug
    id
  }
}
`

export default GET_BLOGS_INFO;