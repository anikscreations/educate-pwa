const { Main } = require('../models');
const { sendErr } = require('../../utils');

/*  ======================
 *  -- MAIN CONTROLLERS --
 *  ======================
 */

// -| Main controllers |-

const get = async (req, res, next) => {
  try {
    const docs =  await Main.find()
    .sort('-created_date')
    .lean();

    return res.status(200).json({
      message: 'All docs found!',
      docs
      
    });
  } catch (err) {
    return sendErr(res, err);
  }
};

/*  =============
 *  -- EXPORTS --
 *  =============
 */

module.exports = {
  // Main controllers
  get
};
