const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const Profile = require("../../models/Profile");
const User = require("../../models/User");

// @route GET api/profile/me
// @desc Get the current user's profile
// @access Private
router.get("/me", auth, async (req, res) => {
  try {
    // getting the profile if already exists
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["name"]);

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route POST api/profile
// @desc Create or update a user profile
// @access Private
router.post(
  "/",
  [
    auth,
    [
      check("university", "University is Required").not().isEmpty(),
      check("major", "Major is Required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // else we destructure the fields and create a profile
    const { university, major, hourlyRate, bio } = req.body;

    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (university) profileFields.university = university;
    if (major) profileFields.major = major;
    if (hourlyRate) profileFields.hourlyRate = hourlyRate;
    if (bio) profileFields.bio = bio;

    // update or create the profile
    try {
      let profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        // Update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      }
      // else we Create a new profile
      profile = new Profile(profileFields);
      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
