/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost(
    $filter: ModelSubscriptionPostFilterInput
    $username: String
  ) {
    onCreatePost(filter: $filter, username: $username) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost(
    $filter: ModelSubscriptionPostFilterInput
    $username: String
  ) {
    onUpdatePost(filter: $filter, username: $username) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost(
    $filter: ModelSubscriptionPostFilterInput
    $username: String
  ) {
    onDeletePost(filter: $filter, username: $username) {
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
export const onCreateWildlife = /* GraphQL */ `
  subscription OnCreateWildlife($filter: ModelSubscriptionWildlifeFilterInput) {
    onCreateWildlife(filter: $filter) {
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
export const onUpdateWildlife = /* GraphQL */ `
  subscription OnUpdateWildlife($filter: ModelSubscriptionWildlifeFilterInput) {
    onUpdateWildlife(filter: $filter) {
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
export const onDeleteWildlife = /* GraphQL */ `
  subscription OnDeleteWildlife($filter: ModelSubscriptionWildlifeFilterInput) {
    onDeleteWildlife(filter: $filter) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
export const onCreateSightings = /* GraphQL */ `
  subscription OnCreateSightings(
    $filter: ModelSubscriptionSightingsFilterInput
    $username: String
  ) {
    onCreateSightings(filter: $filter, username: $username) {
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
export const onUpdateSightings = /* GraphQL */ `
  subscription OnUpdateSightings(
    $filter: ModelSubscriptionSightingsFilterInput
    $username: String
  ) {
    onUpdateSightings(filter: $filter, username: $username) {
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
export const onDeleteSightings = /* GraphQL */ `
  subscription OnDeleteSightings(
    $filter: ModelSubscriptionSightingsFilterInput
    $username: String
  ) {
    onDeleteSightings(filter: $filter, username: $username) {
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
