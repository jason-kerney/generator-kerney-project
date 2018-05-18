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
                name: 'fileName',
                message: 'File name:'
            },
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
        const fileName = this.props.fileName;
        const fileVarName = this.props.fileVarName;

        const templateValues = {
            fileName: fileName,
            fileVarName: fileVarName
        };

        let testPathTokens = ['test'];
        let binPathTokens = ['app']

        const copyDefinitions = [
            {
                templatePath: 'module.template.js',
                filePath: joinPath(binPathTokens, fileName + '.js'),
                isTemplate: true
            },
            {
                templatePath: 'test.template.js',
                filePath: joinPath(testPathTokens, fileName + '.test.js'),
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
