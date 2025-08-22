const express = require("express");
const HomeController = require("../controller/HomeController.js");
const ServicosController = require("../controller/ServicosController.js")
const PortfolioController = require("../controller/PortfolioController.js")
const ContatoController = require("../controller/ContatoController.js")

const router = express.Router();

router.get("/", HomeController.index);
router.get("/servicos", ServicosController.index);
router.get("/portfolio", PortfolioController.index);
router.get("/contato", ContatoController.index);
router.post("/contato", ContatoController.send)

module.exports = router;