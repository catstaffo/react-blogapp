/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      title
      content
      postImage
      username
      date
      time
      datetime
      comments {
        items {
          id
          message
          username
          date
          time
          datetime
          postId
          createdAt
          updatedAt
        }
        nextToken
      }
      wildlife {
        items {
          id
          postId
          wildlifeId
          createdAt
          updatedAt
          username
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      title
      content
      postImage
      username
      date
      time
      datetime
      comments {
        items {
          id
          message
          username
          date
          time
          datetime
          postId
          createdAt
          updatedAt
        }
        nextToken
      }
      wildlife {
        items {
          id
          postId
          wildlifeId
          createdAt
          updatedAt
          username
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      title
      content
      postImage
      username
      date
      time
      datetime
      comments {
        items {
          id
          message
          username
          date
          time
          datetime
          postId
          createdAt
          updatedAt
        }
        nextToken
      }
      wildlife {
        items {
          id
          postId
          wildlifeId
          createdAt
          updatedAt
          username
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createWildlife = /* GraphQL */ `
  mutation CreateWildlife(
    $input: CreateWildlifeInput!
    $condition: ModelWildlifeConditionInput
  ) {
    createWildlife(input: $input, condition: $condition) {
      id
      category
      bio
      family
      species
      posts {
        items {
          id
          postId
          wildlifeId
          createdAt
          updatedAt
          username
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateWildlife = /* GraphQL */ `
  mutation UpdateWildlife(
    $input: UpdateWildlifeInput!
    $condition: ModelWildlifeConditionInput
  ) {
    updateWildlife(input: $input, condition: $condition) {
      id
      category
      bio
      family
      species
      posts {
        items {
          id
          postId
          wildlifeId
          createdAt
          updatedAt
          username
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteWildlife = /* GraphQL */ `
  mutation DeleteWildlife(
    $input: DeleteWildlifeInput!
    $condition: ModelWildlifeConditionInput
  ) {
    deleteWildlife(input: $input, condition: $condition) {
      id
      category
      bio
      family
      species
      posts {
        items {
          id
          postId
          wildlifeId
          createdAt
          updatedAt
          username
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      message
      username
      date
      time
      datetime
      post {
        id
        title
        content
        postImage
        username
        date
        time
        datetime
        comments {
          nextToken
        }
        wildlife {
          nextToken
        }
        createdAt
        updatedAt
      }
      postId
      createdAt
      updatedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      message
      username
      date
      time
      datetime
      post {
        id
        title
        content
        postImage
        username
        date
        time
        datetime
        comments {
          nextToken
        }
        wildlife {
          nextToken
        }
        createdAt
        updatedAt
      }
      postId
      createdAt
      updatedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      message
      username
      date
      time
      datetime
      post {
        id
        title
        content
        postImage
        username
        date
        time
        datetime
        comments {
          nextToken
        }
        wildlife {
          nextToken
        }
        createdAt
        updatedAt
      }
      postId
      createdAt
      updatedAt
    }
  }
`;
export const createSightings = /* GraphQL */ `
  mutation CreateSightings(
    $input: CreateSightingsInput!
    $condition: ModelSightingsConditionInput
  ) {
    createSightings(input: $input, condition: $condition) {
      id
      postId
      wildlifeId
      post {
        id
        title
        content
        postImage
        username
        date
        time
        datetime
        comments {
          nextToken
        }
        wildlife {
          nextToken
        }
        createdAt
        updatedAt
      }
      wildlife {
        id
        category
        bio
        family
        species
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      username
    }
  }
`;
export const updateSightings = /* GraphQL */ `
  mutation UpdateSightings(
    $input: UpdateSightingsInput!
    $condition: ModelSightingsConditionInput
  ) {
    updateSightings(input: $input, condition: $condition) {
      id
      postId
      wildlifeId
      post {
        id
        title
        content
        postImage
        username
        date
        time
        datetime
        comments {
          nextToken
        }
        wildlife {
          nextToken
        }
        createdAt
        updatedAt
      }
      wildlife {
        id
        category
        bio
        family
        species
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      username
    }
  }
`;
export const deleteSightings = /* GraphQL */ `
  mutation DeleteSightings(
    $input: DeleteSightingsInput!
    $condition: ModelSightingsConditionInput
  ) {
    deleteSightings(input: $input, condition: $condition) {
      id
      postId
      wildlifeId
      post {
        id
        title
        content
        postImage
        username
        date
        time
        datetime
        comments {
          nextToken
        }
        wildlife {
          nextToken
        }
        createdAt
        updatedAt
      }
      wildlife {
        id
        category
        bio
        family
        species
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      username
    }
  }
`;
