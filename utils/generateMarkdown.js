// function to generate markdown for README
function generateMarkdown(data) {

// Function to generate license markdown based on selected license
const generateLicense = (license) => {
  const licenses = {
    'AFL-3.0': 'Academic Free License v3.0',
    'Apache-2.0': '[![License: Apache 2.0 ](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'Artistic-2.0': 'Artistic license 2.0',
    'BSL-1.0': 'Boost Software License 1.0',
    'BSD-2-Clause': 'BSD 2-clause "Simplified" license',
    'BSD-3-Clause': 'BSD 3-clause "New" or "Revised" license',
    'BSD-3-Clause-Clear': 'BSD 3-clause Clear license',
    'BSD-4-Clause': 'BSD 4-clause "Original" or "Old" license',
    '0BSD': 'BSD Zero-Clause license',
    'CC': 'Creative Commons license family',
    'CC0-1.0': 'Creative Commons Zero v1.0 Universal',
    'CC-BY-4.0': 'Creative Commons Attribution 4.0',
    'CC-BY-SA-4.0': 'Creative Commons Attribution ShareAlike 4.0',
    'WTFPL': 'Do What The F*ck You Want To Public License',
    'ECL-2.0': 'Educational Community License v2.0',
    'EPL-1.0': 'Eclipse Public License 1.0',
    'EPL-2.0': 'Eclipse Public License 2.0',
    'EUPL-1.1': 'European Union Public License 1.1',
    'AGPL-3.0': 'GNU Affero General Public License v3.0',
    'GPL': 'GNU General Public License family',
    'GPL-2.0': 'GNU General Public License v2.0',
    'GPL-3.0': 'GNU General Public License v3.0',
    'LGPL': 'GNU Lesser General Public License family',
    'LGPL-2.1': 'GNU Lesser General Public License v2.1',
    'LGPL-3.0': 'GNU Lesser General Public License v3.0',
    'ISC': 'ISC',
    'LPPL-1.3c': 'LaTeX Project Public License v1.3c',
    'MS-PL': 'Microsoft Public License',
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'MPL-2.0': 'Mozilla Public License 2.0',
    'OSL-3.0': 'Open Software License 3.0',
    'PostgreSQL': 'PostgreSQL License',
    'OFL-1.1': 'SIL Open Font License 1.1',
    'NCSA': 'University of Illinois/NCSA Open Source License',
    'Unlicense': 'The Unlicense',
    'Zlib': 'zLib License',
    // Add more licenses here
  };
  return licenses[license];
};



  // Combine all sections into the final markdown
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [User Story](#userStory)
- [Installation](#installation)
- [Screenshots](#screenshots)
- [Usage](#usage)
- [Credits](#credits)
- [Deployment](#deployment)
- [How to Contribute](#contribute)
  - [Contributions](#contributions)
  - [Starred Project](#starred)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)
- [Badges](#badges)

## User Story
${data.userStory}

## Installation
${data.installation}

## Screenshots
${data.screenshots}

## Usage
${data.usage}

## Credits
${data.credits}

## Deployment
${data.deployment}

## How to Contribute
${data.contribute}

### Contributions
${data.contributions}

### Starred Project
${data.starred}

## Tests
${data.tests}

## Questions
${data.questions} 

## License
${generateLicense(data.license)}

## Badges
${badges}
`;
}

module.exports = generateMarkdown;
