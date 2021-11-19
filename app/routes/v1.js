const express = require('express');
const router = express.Router();

const verNum = 1;

















//UPLOAD A NEW CV start

router.post(`/v${verNum}/role/application/change-cv`, function (req, res) {
    const newCV = req.session.data['use-profile-cv'];

    if (newCV === 'no') {
        res.redirect(`/v${verNum}/role/application/cv-load`);
    } else {
        res.redirect(`/v${verNum}/role/main-application-dashboard`);
    }
});



// UIPLOAD A NEW CV end



//disability starts

router.post(`/v${verNum}/ur06/split-version/diversity-monitoring/disability`, function (req, res) {
    const disability = req.session.data['disability'];

    if (disability === 'yes') {
        res.redirect(`/v${verNum}/ur06/split-version/diversity-monitoring/disability-reduced-ability`);
    } else {
        res.redirect(`/v${verNum}/ur06/split-version/account-dashboard`);
    }
});



//disability ends







module.exports = router

