const nodemailer = require("nodemailer");

const tarnsporter = nodemailer.createTransport({
    secure: true,
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: "rathodvivek5500@gmail.com",
        pass: "jkhqecybixducnby"
    }
});

async function sendMail(to, sub, mes) {
    try {
        await tarnsporter.sendMail({
            from: "rathodvivek5500@gmail.com",
            to: to,
            subject: sub,
            html: mes
        });

        console.log("Email Sent ✅");

    } catch (error) {
        console.log("Mail Error ❌", error);
    }
}

module.exports = sendMail;   // 🔥 THIS LINE IS MUST