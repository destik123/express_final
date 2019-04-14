exports.get_landing = function(req, res, next) {
    res.render('index', {title: `Займы в Перми по лучшим условиям | Главная`});
};
