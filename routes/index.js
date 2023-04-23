const express = require('express');
const router = express.Router();
const Controller = require('../controllers/indexController');

router.get('/', Controller.home); // change route to '/'

router.get('/math', Controller.math);
router.get('/math/lingkaran', Controller.lingkaran);
router.get('/math/trigonometri', Controller.trigonometri);
router.get('/math/eksponen', Controller.eksponen);
router.get('/math/fungsi-eksponen', Controller.fungsiEksponen);
router.get('/math/logaritma', Controller.logaritma);
router.get('/math/segitiga', Controller.segitiga);
router.get('/math/barisanDeretAritmatika', Controller.barisanDeretAritmatika);
router.get('/math/barisanDeretGeometri', Controller.barisanDeretGeometri);
router.get('/math/peluang', Controller.peluang);

router.get('/physics', Controller.physics);
router.get("/physics/usaha", Controller.usaha);
router.get('/physics/energi', Controller.energi);
router.get('/physics/tekanan', Controller.tekanan);
router.get('/physics/kirchhoff', Controller.kirchhoff);
router.get('/physics/ohm', Controller.ohm);
router.get('/physics/coulomb', Controller.coulomb);
router.get('/physics/glbb', Controller.glbb);
router.get('/physics/gelombang', Controller.gelombang);
router.get('/physics/hukumNewton', Controller.hukumNewton);

router.get('/chemist', Controller.chemist);
router.get('/chemist/lavoisier', Controller.lavoisier);
router.get('/chemist/avogrado', Controller.avogrado);
router.get('/chemist/gayLusaac', Controller.gayLusaac);
router.get('/chemist/atomRelatif', Controller.atomRelatif);
router.get('/chemist/molekulRelatif', Controller.molekulRelatif);
router.get('/chemist/elektroValensi', Controller.elektroValensi);
router.get('/chemist/sejarahAtom', Controller.sejarahAtom);

module.exports = router;
