const mongoose = require('mongoose');

const Package = mongoose.model('Package');

module.exports.createPackage = (req, res, next) => {
    var package = new Package();

    package.packageID = req.body.packageID;
    package.packageName = req.body.packageName;
    package.source = req.body.source;
    package.price = req.body.price;
    package.maxPersons = req.body.maxPersons;
    package.dates1 = req.body.dates1;
    package.dates2 = req.body.dates2;
    package.dates3 = req.body.dates3;
    package.noOfDays = req.body.noOfDays;
    package.dayTitle = req.body.dayTitle;
    package.dayDescription = req.body.dayDescription;

    package.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate found.']);
            else
                return next(err);
        }
         
    });
}

// 
module.exports.package = (req, res, next) =>{
    Package.find(
        (err, packages) => {
            if (err)
            console.log(err);
                else
                res.json(packages);
        }
    );
}
// 


