class PlansController {

    index(req, res) {

        res.render("plans");
    }

    create(req,res){

        res.render("plans/create");
    }
}

module.exports = new PlansController();
