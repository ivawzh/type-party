import gql from 'graphql-tag';

export const GET_WEBSITE = gql`
  query GetWebsite($slug: String!) {
    website(slug: $slug) {
      slug
      title
      url
      createdAt
      typefaces {
        name
        slug
      }
      images {
        full {
          createdAt
          url
        }
      }
      tags {
        name
        id
      }
    }
    auth @client {
      loggedIn
    }
  }
`;

export const KEEP_EXPLORING = gql`
  query KeepExploringQuery {
    websites(input: { first: 4 }) {
      title
      slug
      url
      images {
        thumbnail {
          createdAt
          url
        }
      }
      typefaces {
        slug
        name
      }
    }
  }
`;
