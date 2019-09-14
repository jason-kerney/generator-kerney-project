'use strict';

const path = require('path');
const Generator = require('yeoman-generator');

function joinPath(basePathTokens, filename) {
    return basePathTokens.concat([filename]).join(path.sep);
}

module.exports = class extends Generator {
    prompting() {
        const prompts = [
            {
                type: 'input',
                name: 'fileVarName',
                message: 'Module variable name:'
            }
        ];

        return this.prompt(prompts).then(props => {
            this.props = props;
        });
    }

    writing() {
        const fileVarName = this.props.fileVarName;

        const templateValues = {
            fileName: fileVarName,
            fileVarName: fileVarName
        };

        let testPathTokens = ['tests'];

        const copyDefinitions = [
            {
                templatePath: 'test.template.js',
                filePath: joinPath(testPathTokens, fileVarName + '.test.js'),
                isTemplate: true
            }
        ];

        copyDefinitions.forEach(copyDefinition => {
            if (copyDefinition.isTemplate) {
                this.fs.copyTpl(
                    this.templatePath(copyDefinition.templatePath),
                    this.destinationPath(copyDefinition.filePath),
                    templateValues
                );
            } else {
                this.fs.copy(
                    this.templatePath(copyDefinition.templatePath),
                    this.destinationPath(copyDefinition.filePath)
                );
            }
        });

    }

};
