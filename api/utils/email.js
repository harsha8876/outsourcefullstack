import nodemailer from 'nodemailer';

const sendEmail = async (option) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const emailOptions = {
        from: 'Outsource support <outsource809@gmail.com>',
        to: option.email,
        subject: option.subject,
        text: option.message
    };

    try {
        await transporter.sendMail(emailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Error sending email');
    }
};

export default sendEmail;
