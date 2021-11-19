const express = require("express")
const router = express.Router()

const verNum = 5



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

// UPLOAD A NEW CV end


//SOCIAL MEDIA ACCOUNTS ACCOUNT start

router.post(
  `/v${verNum}/account/additional-interests/social-accounts`,
  function (req, res) {
    const socialMedia = req.session.data["social-media-accounts"]

    if (socialMedia === "yes") {
      res.redirect(`/v${verNum}/account/additional-interests/social-media-account-lists`)
    } else {
      res.redirect(`/v${verNum}/account/additional-interests/possible-reputational-issues`)
    }
  }
)

// SOCIAL MEDIA ACCOUNTS ACCOUNT end

//SOCIAL MEDIA ACCOUNTS ROLE start

router.post(
  `/v${verNum}/role/additional-interests/social-accounts`,
  function (req, res) {
    const socialMedia = req.session.data["social-media-accounts"]

    if (socialMedia === "yes") {
      res.redirect(`/v${verNum}/role/additional-interests/social-media-account-lists`)
    } else {
      res.redirect(`/v${verNum}/role/additional-interests/possible-reputational-issues`)
    }
  }
)

// SOCIAL MEDIA ACCOUNTS ROLE end



//DEGREE INSTITUTION ACCOUNT start

router.post(
  `/v${verNum}/account/diversity-monitoring/education-institution`,
  function (req, res) {
    const degreeInstitution = req.session.data["degree"]

    if (degreeInstitution === "Yes") {
      res.redirect(`/v${verNum}/account/diversity-monitoring/education-detail`)
    } else {
      res.redirect(`/v${verNum}/account/account-dashboard`)
    }
  }
)

//DEGREE INSTITUTION ACCOUNT end

//DEGREE INSTITUTION ROLE  start

router.post(
  `/v${verNum}/role/more-about-you/education-institution`,
  function (req, res) {
    const degreeInstitution = req.session.data["degree"]

    if (degreeInstitution === "Yes") {
      res.redirect(`/v${verNum}/role/more-about-you/education-detail`)
    } else {
      res.redirect(`/v${verNum}/check-answers/check-answer-education`)
    }
  }
)

//DEGREE INSTITUTION ROLE end


//highest qualification  start

router.post(
  `/v${verNum}/account/diversity-monitoring/highest-qualification`,
  function (req, res) {
    const highestQualification = req.session.data["highest-qualification"]
    const highestQualificationTwo = req.session.data["highest-qualification-two"]
    const highestQualificationThree = req.session.data["highest-qualification-three"]
    if (highestQualification === "No qualifications") {
      res.redirect(`/v${verNum}/account/account-dashboard`)
    } else if (highestQualification === "Prefer not to say") {
      res.redirect(`/v${verNum}/account/account-dashboard`)
    } else if (highestQualificationThree === "Degree level or above") {
      res.redirect(`/v${verNum}/account/diversity-monitoring/education-degree-institution`)
    } else if (highestQualificationTwo === "Apprenticeship") {
      res.redirect(`/v${verNum}/account/diversity-monitoring/education-degree`)
    } 
    else if 
    (
    highestQualification === "GCSEs or equivalent" ||
    highestQualification === "AS, A level or equivalent" ||
    highestQualification === "NVQ or equivalent"
    ) 
    {
      res.redirect(`/v${verNum}/account/account-dashboard`)
    } 
    
    else if 
    (
    highestQualificationTwo === "Apprenticeship" &&
    highestQualificationThree === "Degree or above"
    ) 
    {
      res.redirect(`/v${verNum}/account/diversity-monitoring/education-institution`)
    }  else {
      res.redirect(`/v${verNum}/account/account-dashboard`)
    }
  }
)


//highest qualification end




//highest qualification  start

router.post(
  `/v${verNum}/role/more-about-you/highest-qualification`,
  function (req, res) {
    const highestQualification = req.session.data["highest-qualification"]
    const highestQualificationTwo = req.session.data["highest-qualification-two"]
    const highestQualificationThree = req.session.data["highest-qualification-three"]
    if (highestQualification === "No qualifications") {
      res.redirect(`/v${verNum}/check-answers/check-answer-education`)
    } else if (highestQualification === "Prefer not to say") {
      res.redirect(`/v${verNum}/check-answers/check-answer-education`)
    } else if (highestQualificationThree === "Degree level or above") {
      res.redirect(`/v${verNum}/role/more-about-you/education-degree-institution`)
    } else if (highestQualificationTwo === "Apprenticeship") {
      res.redirect(`/v${verNum}/role/more-about-you/education-degree`)
    } 
    else if 
    (
    highestQualification === "GCSEs or equivalent" ||
    highestQualification === "AS, A level or equivalent" ||
    highestQualification === "NVQ or equivalent"
    ) 
    {
      res.redirect(`/v${verNum}/check-answers/check-answer-education`)
    } 
    else if 
    (
      highestQualificationThree === "Degree level or above" 
    ) 
    {
      res.redirect(`/v${verNum}/role/more-about-you/education-institution`)
    } 
    else if 
    (
    highestQualificationTwo === "Apprenticeship" &&
    highestQualificationThree === "Degree or above"
    ) 
    {
      res.redirect(`/v${verNum}/role/more-about-you/education-institution`)
    }  else {
      res.redirect(`/v${verNum}/check-answers/check-answer-education`)
    }
  }
)


//highest qualification end








//TALENT POOL - ACCOUNT CREATION start

router.post(
  `/v${verNum}/account/new-account/talent-pool-opt-in`,
  function (req, res) {
    const talentPoolOptIn = req.session.data["talent-pool"]

    if (talentPoolOptIn === "Yes") {
      res.redirect(`/v${verNum}/account/new-account/talent-pool-upload-one`)
    } else {
      res.redirect(`/v${verNum}/account/new-account/how-did-you-hear-about-us`)
    }
  }
)

//TALENT POOL - ACCOUNT CREATION end





module.exports = router
