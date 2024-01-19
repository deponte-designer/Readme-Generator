// function to generate markdown for README
function generateMarkdown(data) {
  
  


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








`;
}

module.exports = generateMarkdown;
