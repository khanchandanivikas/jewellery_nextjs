let nodemailer = require("nodemailer");
require("dotenv").config();

const transport = {
  port: process.env.SMTP_PORT,
  host: process.env.SMTP_HOST,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

export default function contact(req, res) {
  const { body } = req;
  verifyToken(body, res);
}

const sendConfirmationEmail = (body, res) => {
  const transporter = nodemailer.createTransport(transport);
  transporter.verify(function (error, success) {
    if (!error) {
      const mailData = {
        from: "khanchandani58@gmail.com",
        to: body.email,
        repplyTo: "khanchandani58@gmail.com",
        subject: "¡Email received! - Jewellery",
        attachments: [
          {
            filename: "logo.png",
            path: "https://jewellery-nextjs.vercel.app/images/logo.png",
            cid: "logo",
          }
        ],
        html: `<html>
                    <head>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

                            img {
                                max-width: 100%;
                                object-fit: cover
                            }
                        </style>
                    </head>
                    <body style='font-family: Roboto'>
                        <div style='width:80%;margin:auto;margin-top:40px;padding:20px 40px;border-color:lightgray;border-width:0 1px;border-style:solid'>
                            <h1 style='text-align:center;color:rgb(129,23,19)'>Jewellery</h1>
                            <h2 style='text-align:center;color:rgb(70,70,96)'>We have received your e-mail correctly.</h2>
                            <br>
                            <p style='color:rgb(70,70,96)'>We will get in touch with you as soon as possible.</p>
                            <p style='color:rgb(70,70,96)'>Thank you.</p>
                            <br>
                            <div style='margin:auto;text-align:right'>
                                <img src='cid:logo' style='width:150px;'/>
                            </div>
                            <br><br>
                            <div class='separator' style='height:1px;border-color:lightgray;border-style:dotted;border-width:2px 0 0 0;'></div>
                            <br>
                        </div>
                    </body>
                </html>`,
      };

      transporter.sendMail(mailData, function (err, info) {
        if (!err) {
          res.status(200).send({ status: "success" });
        } else {
          res.status(500).send({
            status: "error",
            error: "ERROR No se ha podido mandar el mensaje.",
          });
        }
      });
    } else {
      res.status(500).send({
        status: "error",
        error: "ERROR al conectar a smtp en el reenvío al usuario.",
      });
    }
  });
};

const sendEmail = (body, res) => {
  const transporter = nodemailer.createTransport(transport);
  transporter.verify(function (err, success) {
    if (!err) {
      const mailData = {
        from: body.email,
        to: "khanchandani58@gmail.com",
        repplyTo: "khanchandani58@gmail.com",
        subject: "¡E-mail received! - Jewellery",
        attachments: [
          {
            filename: "logo.png",
            path: "https://jewellery-nextjs.vercel.app/images/logo.png",
            cid: "logo",
          }
        ],
        html: `<html>
                      <head>
                          <style>
                              @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap');
                          </style>
                      </head>
                      <body style='font-family: Montserrat'>
                          <div style='width:80%;margin:auto;margin-top:40px;padding:20px 40px;border-color:lightgray;border-width:0 1px;border-style:solid'>
                              <h1 style='text-align:center;color:rgb(129,23,19)'>Jewellery</h1>
                              <h2 style='text-align:center;color:rgb(70,70,96)'>Message received through contact form.</h2>
                              <br>
                              <p style='color:rgb(70,70,96)'>Nombre: <b>${body.name}</b></p>                       
                              <p style='color:rgb(70,70,96)'>E-mail: <b>${body.email}</b></p>
                              <p style='color:rgb(70,70,96)'>Telephone: <b>${body.telephone}</b></p>                       
                              <p style='color:rgb(70,70,96)'>Motive: <b>${body.purpose}</b></p>
                              <p style='color:rgb(70,70,96)'>Subject: <b>${body.subject}</b></p>                       
                              <p style='color:rgb(70,70,96)'>Message: <b>${body.message}</b></p>
                              <br>
                              <div style='margin:auto;text-align:right'>
                                  <img src='cid:logo' style='width:150px;'/>
                              </div>
                              <br><br>
                          </div>
                      </body>
                  </html>`,
      };

      transporter.sendMail(mailData, function (err, info) {
        if (err) {
          console.log(err);
          res.status(500).send({
            status: "error",
            error: "ERROR No se ha podido mandar el mensaje.",
            err,
          });
        } else {
          sendConfirmationEmail(body, res);
        }
      });
    } else {
      console.log(err);
      res
        .status(500)
        .send({ status: "error", error: "ERROR al conectar a smtp.", err });
    }
  });
};

const verifyToken = async (body, res) => {
  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${body.token}`,
      { method: "POST" }
    );
    const data = await response.json();
    if (!data || !data.success) {
      return res
        .status(403)
        .send({ status: "error", error: "ERROR Recaptcha no es válido." });
    }
    sendEmail(body, res);
  } catch (err) {
    return res
      .status(403)
      .send({ status: "error", error: "ERROR Recaptcha no es válido." });
  }
};
