/*jslint node: true */
"use strict";

var Generator = require("yeoman-generator");

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);
        this.ctx = {
            theme: "material",
            git: true,
            palette: {
                primary: "lime",
                accent: "indigo"
            }
        };
    }

    initializing() {}

    prompting() {
        return this.prompt([{
            type: "input",
            name: "siteName",
            message: "Your project name",
            default: this.appname // Default to current folder name
        }]).then((answers) => {
            this.ctx.siteName = answers.siteName;
        });
    }

    configuring() {}

    default () {}

    writing() {
        this.fs.copyTpl(
            this.templatePath("docarys.yml"),
            this.destinationPath("docarys.yml"),
            this.ctx
        );

        this.fs.copyTpl(
            this.templatePath("Dockerfile"),
            this.destinationPath("Dockerfile"),
            this.ctx
        );        

        this.fs.copyTpl(
            this.templatePath("docs/index.md"),
            this.destinationPath("docs/index.md"),
            this.ctx
        );

        this.fs.copyTpl(
            this.templatePath("docs/level 1/index.md"),
            this.destinationPath("docs/level 1/index.md"),
            this.ctx
        );

        if (this.ctx.git) {
            this.fs.copyTpl(
                this.templatePath("gitignore"),
                this.destinationPath(".gitignore"),
                this.ctx
        );
        }
    }

    conflicts() {}

    install() {}

    end() {}
};