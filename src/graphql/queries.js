/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      content
      postImage
      username
      comments {
        items {
          id
          message
          username
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        postImage
        username
        comments {
          nextToken
        }
        wildlife {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWildlife = /* GraphQL */ `
  query GetWildlife($id: ID!) {
    getWildlife(id: $id) {
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
export const listWildlife = /* GraphQL */ `
  query ListWildlife(
    $filter: ModelWildlifeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWildlife(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      message
      username
      post {
        id
        title
        content
        postImage
        username
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        message
        username
        post {
          id
          title
          content
          postImage
          username
          createdAt
          updatedAt
        }
        postId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const commentsByPostId = /* GraphQL */ `
  query CommentsByPostId(
    $postId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByPostId(
      postId: $postId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        message
        username
        post {
          id
          title
          content
          postImage
          username
          createdAt
          updatedAt
        }
        postId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSightings = /* GraphQL */ `
  query GetSightings($id: ID!) {
    getSightings(id: $id) {
      id
      postId
      wildlifeId
      post {
        id
        title
        content
        postImage
        username
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
export const listSightings = /* GraphQL */ `
  query ListSightings(
    $filter: ModelSightingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSightings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postId
        wildlifeId
        post {
          id
          title
          content
          postImage
          username
          createdAt
          updatedAt
        }
        wildlife {
          id
          category
          bio
          family
          species
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        username
      }
      nextToken
    }
  }
`;
export const sightingsByPostId = /* GraphQL */ `
  query SightingsByPostId(
    $postId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSightingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sightingsByPostId(
      postId: $postId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postId
        wildlifeId
        post {
          id
          title
          content
          postImage
          username
          createdAt
          updatedAt
        }
        wildlife {
          id
          category
          bio
          family
          species
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        username
      }
      nextToken
    }
  }
`;
export const sightingsByWildlifeId = /* GraphQL */ `
  query SightingsByWildlifeId(
    $wildlifeId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSightingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sightingsByWildlifeId(
      wildlifeId: $wildlifeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postId
        wildlifeId
        post {
          id
          title
          content
          postImage
          username
          createdAt
          updatedAt
        }
        wildlife {
          id
          category
          bio
          family
          species
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        username
      }
      nextToken
    }
  }
`;
