// Env vars
import { GITHUB_PAT } from "$env/static/private";

// Constants
const query = `
  {
    user(login: "diegoulloao") {
      sponsorshipsAsMaintainer(first: 100) {
        nodes {
          sponsorEntity {
            ... on User {
              login
              name
              avatarUrl
            }
          }
        }
      }
    }
  }
`;

export const load = async () => {
  let sponsors = null;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${GITHUB_PAT}`
      },
      body: JSON.stringify({ query })
    });

    if (response.status !== 200) {
      throw new Error(`Status ${response.status}`);
    }

    const { data } = await response.json();

    sponsors = data.user.sponsorshipsAsMaintainer.nodes.map((s) => ({
      name: s.sponsorEntity.name,
      user: s.sponsorEntity.login,
      avatar: s.sponsorEntity.avatarUrl
    }));
  } catch (error) {
    console.error(error);
  }

  return {
    sponsors
  };
};
