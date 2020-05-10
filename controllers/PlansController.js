const PlansService = require("../services/PlansService")
class PlansController {

    index(req, res) {

        res.render("plans");
    }

    create(req, res) {

        res.render("plans/create");
    }

    store(req, res) {
        var { title, list, client, value, imports } = req.body;

        var plan = {

            title,
            list,
            client,
            value,
            import: imports
        }

        PlansService.store(plan)

    }
}

module.exports = new PlansController();
