
/*
 * GET users listing.
 */

import {FetchBookController} from '../controller/FetchBookController.js';

exports.list = function(req, res){
    FetchBookController(req, res);
  };