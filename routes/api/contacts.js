const express = require('express');

const router = express.Router();

const ctrl = require('../../controllers/contacts')

const { validateBody, isValidId, authenticate } = require('../../middlewares');

const schemas = require('../../models/contact');


router.get('/', authenticate, ctrl.getAllContacts)

router.get('/:contactId', authenticate, isValidId, ctrl.getOneContactById)

router.post('/', authenticate, validateBody(schemas.addSchema), ctrl.addContact)

router.delete('/:contactId', authenticate, isValidId, ctrl.deleteContact)

router.put('/:contactId', authenticate, isValidId, validateBody(schemas.addSchema), ctrl.updateContactById)

router.patch("/:contactId/favorite", authenticate, isValidId, validateBody(schemas.updateFavoriteSchema), ctrl.updateStatusContact);


module.exports = router


