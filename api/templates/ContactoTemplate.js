'use strict';

const nodemailer = require('nodemailer');
require('dotenv').config();

this.EnviarEmail = (pCorreo) => {
    //paso1
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD,
        }
    });

    //paso 2
    let mailOptions = {
        from: process.env.MAIL_USER,
        to: pCorreo,
        subject: 'Gracias por contactarnos!',
        html: `
        <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#2d3436" bgcolor="#2d3436">
            <tr height="200px">
                <td>
                    <h1 style="color:#fff; text-align:center">
                        Bienvenido a la aplicación de reservas, en unas horas habiles un representante se pondra en contacto con usted.
                    </h1>
                </td>
            </tr>
            <tr bgcolor="#fff">
                <td style="text-align:center;">
                    <p style="color: #000;">Una plataforma de reservas a su disposición!</p>
                </td>
            </tr>
        </table>
        `
    }

    //paso 3
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log('El correo se envio de manera correcta ' + info.response);
        }
    });
};

module.exports = this;