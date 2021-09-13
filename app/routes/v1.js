const express = require('express');
const router = express.Router();

const verNum = 1;

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


//EXAMPLE ROUTES END

module.exports = router

