//put up your consts here
const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

//post route