const express = require("express")
const router = express.Router()

const verNum = 3





//UPLOAD A NEW CV start

router.post(`/v${verNum}/role/application/change-cv`, function (req, res) {
  const newCV = req.session.data["use-profile-cv"]

  if (newCV === "no") {
    res.redirect(`/v${verNum}/role/application/cv-load`)
  } else {
    res.redirect(`/v${verNum}/role/main-application-dashboard`)
  }
})

// UIPLOAD A NEW CV end

//disability starts

router.post(
  `/v${verNum}/ur06/split-version/diversity-monitoring/disability`,
  function (req, res) {
    const disability = req.session.data["disability"]

    if (disability === "yes") {
      res.redirect(
        `/v${verNum}/ur06/split-version/diversity-monitoring/disability-reduced-ability`
      )
    } else {
      res.redirect(`/v${verNum}/ur06/split-version/account-dashboard`)
    }
  }
)

//disability ends

//professional-qualifications starts

router.post(
  `/v${verNum}/role/more-about-you/professionalQualificiations`,
  function (req, res) {
    const professionalqualificiations =
      req.session.data["professional-qualifications"]

    if (professionalqualificiations === "yes") {
      res.redirect(
        `/v${verNum}/role/more-about-you/professional-qualificiations-detail`
      )
    } else {
      res.redirect(
        `/v${verNum}/check-answers/check-answer-professional-qualifications`
      )
    }
  }
)

//professional-qualifications ends

//disability starts

router.post(
  `/v${verNum}/role/diversity-monitoring/disability-mental-health`,
  function (req, res) {
    const disability = req.session.data["disability"]

    if (disability === "yes") {
      res.redirect(
        `/v${verNum}/role/diversity-monitoring/disability-reduced-ability`
      )
    } else {
      res.redirect(`/v${verNum}/check-answers/check-answer-disability`)
    }
  }
)

//disability ends

//disability-accounts starts

router.post(
  `/v${verNum}/account/diversity-monitoring/disability-mental-health-account`,
  function (req, res) {
    const disability = req.session.data["disability"]

    if (disability === "yes") {
      res.redirect(
        `/v${verNum}/account/diversity-monitoring/disability-reduced-ability`
      )
    } else {
      res.redirect(`/v${verNum}/account/account-dashboard`)
    }
  }
)

//disability-accounts ends

//ethnicity starts

router.post(
  `/v${verNum}/role/diversity-monitoring/ethnicity`,
  function (req, res) {
    const ethnicity = req.session.data["ethnicity"]

    if (ethnicity === "White") {
      res.redirect(`/v${verNum}/role/diversity-monitoring/ethnicity-white`)
    } else if (ethnicity === "Mixed or multiple ethnic groups") {
      res.redirect(`/v${verNum}/role/diversity-monitoring/ethnicity-mixed`)
    } else if (ethnicity === "Asian or Asian British") {
      res.redirect(`/v${verNum}/role/diversity-monitoring/ethnicity-asian`)
    } else if (ethnicity === "Black, African, Caribbean or Black British") {
      res.redirect(`/v${verNum}/role/diversity-monitoring/ethnicity-black`)
    } else if (ethnicity === "Other ethnic group") {
      res.redirect(`/v${verNum}/role/diversity-monitoring/ethnicity-other`)
    } else {
      res.redirect(`/v${verNum}/check-answers/check-answer-ethnicity`)
    }
  }
)

//ethnicity ends

//ethnicity-account starts

router.post(
  `/v${verNum}/account/diversity-monitoring/ethnicity`,
  function (req, res) {
    const ethnicity = req.session.data["ethnicity"]

    if (ethnicity === "White") {
      res.redirect(`/v${verNum}/account/diversity-monitoring/ethnicity-white`)
    } else if (ethnicity === "Mixed or multiple ethnic groups") {
      res.redirect(`/v${verNum}/account/diversity-monitoring/ethnicity-mixed`)
    } else if (ethnicity === "Asian or Asian British") {
      res.redirect(`/v${verNum}/account/diversity-monitoring/ethnicity-asian`)
    } else if (ethnicity === "Black, African, Caribbean or Black British") {
      res.redirect(`/v${verNum}/account/diversity-monitoring/ethnicity-black`)
    } else if (ethnicity === "Other ethnic group") {
      res.redirect(`/v${verNum}/account/diversity-monitoring/ethnicity-other`)
    } else {
      res.redirect(`/v${verNum}/account/account-dashboard`)
    }
  }
)

//ethnicity-account ends

//professional-qualifications starts

router.post(
  `/v${verNum}/user-research/ur06e/role/more-about-you/professionalQualificiations`,
  function (req, res) {
    const professionalqualificiations =
      req.session.data["professional-qualifications"]

    if (professionalqualificiations === "yes") {
      res.redirect(
        `/v${verNum}/user-research/ur06e/role/more-about-you/professional-qualificiations-detail`
      )
    } else {
      res.redirect(
        `/v${verNum}/user-research/ur06e/check-answers/check-answer-professional-qualifications`
      )
    }
  }
)

//professional-qualifications ends

//professional-qualifications starts

router.post(
  `/v${verNum}/account/diversity-monitoring/professionalQualificiations`,
  function (req, res) {
    const professionalqualificiations =
      req.session.data["professional-qualifications"]

    if (professionalqualificiations === "yes") {
      res.redirect(
        `/v${verNum}/account/diversity-monitoring/professional-qualificiations-detail`
      )
    } else {
      res.redirect(`/v${verNum}/account/account-dashboard`)
    }
  }
)

//professional-qualifications ends

//disability starts

router.post(
  `/v${verNum}/user-research/ur06e/role/diversity-monitoring/disability-mental-health`,
  function (req, res) {
    const disability = req.session.data["disability"]

    if (disability === "yes") {
      res.redirect(
        `/v${verNum}/user-research/ur06e//role/diversity-monitoring/disability-reduced-ability`
      )
    } else {
      res.redirect(
        `/v${verNum}/user-research/ur06e//check-answers/check-answer-disability`
      )
    }
  }
)

//disability ends

//ethnicity starts

router.post(
  `/v${verNum}/user-research/ur06e/role/diversity-monitoring/ethnicity`,
  function (req, res) {
    const ethnicity = req.session.data["ethnicity"]

    if (ethnicity === "White") {
      res.redirect(
        `/v${verNum}/user-research/ur06e/role/diversity-monitoring/ethnicity-white`
      )
    } else if (ethnicity === "Mixed or multiple ethnic groups") {
      res.redirect(
        `/v${verNum}/user-research/ur06e/role/diversity-monitoring/ethnicity-mixed`
      )
    } else if (ethnicity === "Asian or Asian British") {
      res.redirect(
        `/v${verNum}/user-research/ur06e/role/diversity-monitoring/ethnicity-asian`
      )
    } else if (ethnicity === "Black, African, Caribbean or Black British") {
      res.redirect(
        `/v${verNum}/user-research/ur06e/role/diversity-monitoring/ethnicity-black`
      )
    } else if (ethnicity === "Other ethnic group") {
      res.redirect(
        `/v${verNum}/user-research/ur06e/role/diversity-monitoring/ethnicity-other`
      )
    } else {
      res.redirect(
        `/v${verNum}/user-research/ur06e/check-answers/check-answer-ethnicity`
      )
    }
  }
)

//ethnicity ends

//UPLOAD A NEW CV start

router.post(
  `/v${verNum}/user-research/ur06e/role/application/change-cv`,
  function (req, res) {
    const newCV = req.session.data["use-profile-cv"]

    if (newCV === "no") {
      res.redirect(`/v${verNum}/user-research/ur06e/role/application/cv-load`)
    } else {
      res.redirect(
        `/v${verNum}/user-research/ur06e/role/main-application-dashboard`
      )
    }
  }
)

// UIPLOAD A NEW CV end

//TALENT POOL start

router.post(
  `/v${verNum}/account/more-about-you/talent-pool`,
  function (req, res) {
    const talentPool = req.session.data["talent-pool"]

    if (talentPool === "Yes") {
      res.redirect(`/v${verNum}/account/more-about-you/cv-update`)
    } else {
      res.redirect(`/v${verNum}/account/account-dashboard`)
    }
  }
)

// TALENT POOL end

//UPLOAD A NEW CV start

router.post(
  `/v${verNum}/account/more-about-you/change-cv`,
  function (req, res) {
    const newCV = req.session.data["use-profile-cv"]

    if (newCV === "no") {
      res.redirect(`/v${verNum}/account/more-about-you/cv-load`)
    } else {
      res.redirect(`/v${verNum}/account/account-dashboard`)
    }
  }
)

// UIPLOAD A NEW CV end

module.exports = router
