const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

//post route here