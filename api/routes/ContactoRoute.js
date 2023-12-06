'use strict';

const mailer = require('../templates/ContactoTemplate');

let correo = EnviarCorreo(correo).value;

mailer.EnviarEmail(correo);