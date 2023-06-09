import { gql } from "@apollo/client";

const SEND_COMMENTS=gql`
mutation sendComment(
  $name:String!
  $email:String!
  $text:String!
  $slug:String!
  ) {
  createComment(
    data: {name:$name, email:$email, text:$text, post: {connect: {slug:$slug}}}
  ) {
    id
  }
}
`

export default SEND_COMMENTS;