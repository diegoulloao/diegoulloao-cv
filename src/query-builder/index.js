// Data
import projects from "@data/projects.json";

// Helpers
import { getRepositoriesByOrg } from "@helpers";

// Constants
const USERNAME = "diegoulloao";

// Values
const reposByOrg = getRepositoriesByOrg(projects);

// Builders
const getRepositoriesSubQuery = (repositories) => {
	return repositories.reduce(
		(acc, r, i) =>
			(acc += `
      repo${i}: repository(name: "${r}") {
        name
        stargazers {
          totalCount
        }
      } 
    `),
		""
	);
};

const getReposByOrgSubQuery = (reposByOrg) => {
	return Object.entries(reposByOrg).reduce((acc, [org, repos], i) => {
		acc += `
      org${i}: ${org === USERNAME ? "user" : "organization"}(login: "${org}") {
        ${getRepositoriesSubQuery(repos)}
      }
    `;

		return acc;
	}, "");
};

// Query
const query = `
  {
    user: user(login: "${USERNAME}") {
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
    ${getReposByOrgSubQuery(reposByOrg)}
  }
`;

export { query };
