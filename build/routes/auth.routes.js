"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controllers_1 = require("../controller/auth.controllers");
const validator_check_1 = require("../middlewares/validator.check");
const auth_rules_1 = require("../rules/auth.rules");
class AuthRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    /**
     * @swagger
     * definitions:
     *  User:
     *      type: object
     *      properties:
     *          username:
     *              type: string
     *          password:
     *              type: string
     */
    config() {
        /**
         * @swagger
         * /api/auth:
         *  post:
         *      tags: ["Credenciales"]
         *      summary: Log In
         *      description: Inicio de sesión del usuario
         *      produce:
         *          - application/json
         *      parameters:
         *          - in: body
         *            name: Credentials
         *            description: Usuario y contraseña del usuario.
         *            schema:
         *              $ref: '#/definitions/User'
         *            required: true
         *      responses:
         *          200:
         *              description: Exito
         */
        this.router.post("/", (0, auth_rules_1.authRules)(), [validator_check_1.validate], auth_controllers_1.authController.iniciarSesion);
    }
}
const authRoutes = new AuthRoutes();
exports.default = authRoutes.router;
