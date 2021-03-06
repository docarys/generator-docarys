/*jslint node: true */
"use strict";

var assert = require("yeoman-assert");
var expect = require("expect");
var helpers = require("yeoman-test");
var path = require("path");
var yaml = require("yamljs");

function onPromiseError(reason) {
    expect(false).toBeTruthy("Error in the promise" + reason);
}

describe("App", function () {
    it("Creates a new project with basic options", function () {
        return helpers.run(__dirname)
            .withPrompts({
                siteName: "docarys"
            }).then(function () {
                assert.file(["docarys.yml"]);
                assert.file(["docs/index.md"]);
                assert.file(["docs/level 1/index.md"]);
                assert.file([".gitignore"]);
                // Assert configuration content
                var cfg = yaml.load("docarys.yml");
                expect(cfg).toExist();
                expect(cfg.site_name).toBe("docarys");
                expect(cfg.theme.name).toBe("material");
                expect(cfg.theme.palette.primary).toBe("lime");
                expect(cfg.theme.palette.accent).toBe("indigo");
                expect(cfg.pages).toExist();
            });
    });
});