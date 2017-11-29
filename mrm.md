title: Automating open source project configuration with Mrm by Artem Sapegin
style: styles.css
output: public/mrm.html

-- cover

# Automating open source project configuration with Mrm

## Artem Sapegin

--

## Typical open source project

![](images/typical-oss.png)

--

* 1 × source code file
* 1 × test file
* 1 × documentation file
* 11 × support files

-- teal

<video src="images/nooooo.mp4" autoplay></video>

-- orange

# `.somethingrc`

--

.babelignore
.babelrc
.editorconfig
.eslintignore
.eslintrc
.flowconfig
.gitattributes
.gitignore
.istanbul.yml
.npmignore
.nvmrc
.prettierignore
.prettierrc
.proselintrc
.remarkrc
.shipit
.stylelintrc
.textlintrc
.travis.yml
appveyor.yml
Changelog.md
Code_of_Conduct.md
codecov.yml
Contributing.md
Issue_Template.md
jsconfig.json
lerna.json
License.md
open-bot.yaml
package.json
Pull_Request_Template.md
Readme.md
tsconfig.json

--

## × number of your projects

-- teal

<video src="images/hamster.mp4" autoplay></video>

--

## Support files are *slightly different* in different projects

--

## Very similar but not exactly the same

--

## Templates are OK for bootstrapping new projects

--

## Updates are hard

--

## We need codemods for config files

-- orange

# Mrm

-- teal

# Example: gitignore task

--

```
npx mrm gitignore
```

--

![](http://wow.sapegin.me/3V3q3v2y071W/Image%202017-11-28%20at%206.08.53%20PM.png)

-- teal

# Example: license task

--

```bash
npx mrm license
# Overwrite defaults
npx mrm license --config:name "Gandalf the Grey" \
                --config:email "gandalf@middleearth.com" \
                --config:url "http://middleearth.com"
```

--

![](http://wow.sapegin.me/0G2d1X3G2B1R/Image%202017-11-28%20at%206.18.56%20PM.png)

-- teal

# Example: Jest task

--

```
npx mrm jest
```

--

* Adds npm scripts to run Jest, watch mode and coverage report
* Adds configuration to package.json if needed
* Updates .gitignore, .npmignore, .eslintignore with common patterns
* Creates a sample test file, test.js, when the project has index.js in the root folder
* Installs Jest
* Installs babel-jest if project depends on Babel
* Installs ts-jest if project depends on TypeScript
* Installs Enzyme if project depends on React
* Tries to get rid of Mocha and AVA configs and dependencies
* Suggests to us jest-codemods if projects used other test frameworks

--

## Default tasks

CodeCov, EditorConfig, ESLint, Jest, lint-staged, Prettier, semantic-release, React Styleguidist, stylelint, Travis CI, TypeScript, package.json, contributing guidelines, license and readme file

--

## API for writing tasks.

* JSON, YAML, INI, new line separated text files
* npm install / uninstall
* file operations
* EditorConfig utilities

--

## Minimal configuration

Infer configuration from the project itself or from the environment

--

## Minimal changes

* Infer indentation style or read from EditorConfig
* Keep comments in JSON

-- orange

# Writing custom tasks

--

```js
// Mrm module to work with new line separated text files
const { lines } = require('mrm-core');
module.exports = () => {
  // Read .gitignore if it exists
  lines('.gitignore')
    // Add lines that do not exist in a file yet,
    // but keep all existing lines
    .add(['node_modules/', '.DS_Store'])
    // Update or create a file
    .save();
};
```

--



### Thank you and automate your configs

Slides: [bit.ly/consistent-css](https://sapegin.github.io/slides/inconsistent-styles)<br>
Me: [sapegin.me](http://sapegin.me/)<br>
Twitter: [@iamsapegin](https://twitter.com/iamsapegin)<br>
GitHub: [sapegin](https://github.com/sapegin)

<img src="images/inconsistent-styles/dogs.jpg" style="height:35vh">

--

### Image credits

* [Max Stoiber](https://mxstbr.com/)
* [Priyanka Godbole](https://blog.prototypr.io/10-practical-steps-to-create-a-predictable-accessible-and-harmonious-typography-system-a-case-6c85d901bedd)
* [Nathan Curtis](https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62)
