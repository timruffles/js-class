var help = require("../.sys/test-help");
const _ = require("lodash");
const assert = require("chai").assert;

describe("async functions", function() {

    this.timeout(150);

    help.importAndTest(__dirname, function(exported) {

        const fn = exported.formatUserOrError;

        var user;
        var account;
        var getAccount

        beforeEach(function() {
            user = {name: help.rstring()}
            getAccount = function(user) {
                account = { forUser: user.name, type: help.rstring() }
                return Promise.resolve(account);
            }
        })

        it("returns promise", function() {
            const p = fn(Promise.resolve(user), getAccount, formatHtml, formatError)

            assert.isDefined(p, "nothing returned");
            assert.isFunction(p.then, "returned non-promise");

            return p.catch(() => {});
        });

        it("handles happy path where user and getAccount fulfil promises", function() {
            return fn(Promise.resolve(user), getAccount, formatHtml, formatError)
                .then(function(r) {
                    assert.equal(r, formatHtml(user, account));
                }, notRejected);
        });

        it("handles failures to retrieve user (user promise rejects)", function() {
            const err = Error("Error:" + help.rint());

            return fn(Promise.reject(err), getAccount, formatHtml, formatError)
                .then(function(r) {
                    assert.equal(r, formatError(err));
                }, notRejected);
        });

        it("handles failures to retrieve account (getAccount return promise that rejects)", function() {
            const err = Error("Can't find user: " + help.rint());

            return fn(Promise.resolve(user), _.constant(Promise.reject(err)), formatHtml, formatError)
                .then(function(r) {
                    assert.equal(r, formatError(err));
                }, notRejected);
        });

        function formatHtml(user, account) {
            return `<user>${user.name}</user><account>${account.type}</account>`;
        }

        function formatError(err) {
            return `<error>${err.message}</error>`;
        }

        function notRejected(e) {
            throw Error("should have handled all errors in catch, but rejected with " + e);
        }


    });


});
