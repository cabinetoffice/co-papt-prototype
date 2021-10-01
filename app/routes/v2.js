const express = require('express');
const router = express.Router();

const verNum = 2;

//EXAMPLE ROUTES START

// Add your routes here - above the module.exports line
router.post(`/v${verNum}/teach-eligible-branch`, function (req, res) {
    const checkChoice = req.session.data['eligible-subject'];

    if (checkChoice === 'yes') {
        res.redirect(`/v${verNum}/current-school`);
    } else {
        res.redirect(`/v${verNum}/teach-ineligible`);
    }
});

router.post(`/v${verNum}/school-eligible-branch`, function (req, res) {
    const checkSchool = req.session.data['eligible-school'];

    if (
        checkSchool === 'The Hathershaw College'
        || checkSchool === 'KEVI'
        || checkSchool === 'Queen Elizabeths Grammar School'
    ) {
        res.redirect(`/v${verNum}/itt-subject`);
    } else {
        res.redirect(`/v${verNum}/school-ineligible`);
    }
});


//CHECKBOX EXAMPLE

router.post(`/v${verNum}/tslr/tslr-subject-branch`, function (req, res) {

  
    let subjectsTaught = req.session.data['subjectsTaught'] // as the checkboxes are a group you get all values as an array
    let uncheckedCount = 0
    let unselectedCheckboxesExist = true
  
    // if Array is undefined, unselectedCheckboxesExist = true
    if (subjectsTaught === undefined) {
            unselectedCheckboxesExist = true
      } else
      {
           // count the number of unchecked items 
           subjectsTaught.forEach((element) => {
            if (element === '_unchecked') {
              uncheckedCount++
            }
          })
          // if the unchecked count is the same as the length of the array then they are all unchecked
          if (uncheckedCount === subjectsTaught.length) {
              unselectedCheckboxesExist = true
          }
          else {
              unselectedCheckboxesExist = false
          }
      }
  
    // know we know, send the user to the correct page
    if (unselectedCheckboxesExist) {
      res.redirect(`/v${verNum}/tslr/tslr-ineligible`)
    } else {
      res.redirect(`/v${verNum}/tslr/tslr-still-employed`)
    };
  
  });

//CHECKBOX EXAMPLE



router.post(`/v${verNum}/check-answers-part-one-branch`, function (req, res) {
    const checkItt = req.session.data['eligible-year'];
    const checkSup = req.session.data['supply-teacher'];

    if (checkItt === 'None of the above'
       ) {
        res.redirect(`/v${verNum}/generic-ineligible`);
    }
      else if (checkSup === 'No'
                &&
                checkItt !== 'None of the above'
       ) {
        res.redirect(`/v${verNum}/check-answers-part-one`);
    }
   else res.redirect(`/v${verNum}/check-answers-part-one-alt`);
});


//EXAMPLE ROUTES END











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


//professional-qualifications starts

router.post(`/v${verNum}/role/more-about-you/professionalQualificiations`, function (req, res) {
    const professionalqualificiations = req.session.data['professional-qualifications'];

    if (professionalqualificiations === 'yes') {
        res.redirect(`/v${verNum}/role/more-about-you/professional-qualificiations-detail`);
    } else {
        res.redirect(`/v${verNum}/check-answers/check-answer-professional-qualifications`);
    }
});



//professional-qualifications ends




//disability starts

router.post(`/v${verNum}/role/diversity-monitoring/disability-mental-health`, function (req, res) {
    const disability = req.session.data['disability'];

    if (disability === 'yes') {
        res.redirect(`/v${verNum}/role/diversity-monitoring/disability-reduced-ability`);
    } else {
        res.redirect(`/v${verNum}/check-answers/check-answer-disability`);
    }
});



//disability ends





module.exports = router

