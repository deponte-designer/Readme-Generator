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

  // Function to generate badge markdown based on badge name
  const generateBadge = (badge) => {
    const badges = {
      'edX': '![edX](https://img.shields.io/badge/edX-%2302262B.svg?style=for-the-badge&logo=edX&logoColor=white)',
      'Markdown': '![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)',
      'HTML5': '![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)',
      'CSS3': '![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)',
      'JavaScript': '![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)',
      'jQuery': '![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)',
      'Node.js': '![Node.js](https://img.shields.io/badge/node.js-%23339933.svg?style=for-the-badge&logo=node.js&logoColor=white)',
      'npm': '![npm](https://img.shields.io/badge/npm-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)',
      'React.js': '![React.js](https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=white)',
      'React Native': '![React Native](https://img.shields.io/badge/react_native-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=white)',
      'Bootstrap': '![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)',
      'Windows 11': '![Windows 11](https://img.shields.io/badge/Windows%2011-%230079d5.svg?style=for-the-badge&logo=Windows%2011&logoColor=white)',
      'Figma': '![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)',
      'Slack': '![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)',
      'Google Chrome': '![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)',
      'Visual Studio Code': '![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)',
      'Git': '![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)',
      'GitHub': '![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)',
      'Github Pages': '![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)',
      'GitLab': '![GitLab](https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white)',
      'Netlify': '![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=white)',
      // Add more badges here 
    };
    return badges[badge];
  };

  // Get selected badges and join them with line breaks 
  const selectedBadges = data.badges.map(generateBadge).join('\n');
  const badges = selectedBadges ? selectedBadges + '\n' : '';

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

// Export the generateMarkdown function to make it accessible to other modules
module.exports = generateMarkdown;
