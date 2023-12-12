import fetch from "node-fetch"

// using gatsby example with dynamic data
const sendgrid = require("@sendgrid/mail")
//Your API Key from Sendgrid
sendgrid.setApiKey(process.env.SENDGRID_API_KEY)
const message = {
  //Your authorized email from SendGrid
  from: process.env.SENDGRID_AUTHORIZED_EMAIL,
}

//validate token through google
async function validateHuman(token){
    // console.log("validate human running")
const secret = process.env.RECAPTCHA_KEY;
const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    {
        method: "POST",
    } 
)
//this is where It's failing??
const data = await response.json();
return data.success;
}


//main function
export default async(req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // console.log("This is where the req should be logging")
    // console.log(req.body);

    //this is where I'm getting response error, validate token function above
    const human = await validateHuman(req.body.token);
    if (!human){
        // console.log("this message shows we're getting to the !human part")
        res.status(400);
        res.json({errors: ["Please, you're not fooling us, bot."]})
        return;
    }



  try {
    if (req.method !== "POST") {
      res.json({ message: "Try a POST!" })
    }

    let toEmail = "hamish@centralaero.nz"
    if (req.body.team === "Engineering"){toEmail = "paul@centralaero.nz"}
    const message = {
      to: toEmail,
      replyTo: req.body.email,
      templateId: 'd-a9299bdea85b4aa3a6bc9eb9c255ac5f',
      from: {
        email: "daniel@thoughtfulhq.com",
        name:'Central Aero Form',
      },
      subject: 'Central Aero Form',
      dynamicTemplateData: {
        subject: 'Central Aero Form',
        team: req.body.team,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        message: req.body.message,
      }
    }

    return sendgrid.send(message).then(
      () => {
        let replyEmail = "hamish@centralaero.nz"
        if (req.body.team === "Engineering"){replyEmail = "paul@centralaero.nz"}
        const msg = {
          to: req.body.email,
          templateId: 'd-5cc6b447889d4a2fa02c27bc598f7c19',
          replyTo: replyEmail,
          from: {
            email:process.env.SENDGRID_AUTHORIZED_EMAIL,
            name:'Cental Aero',
          },
          subject: 'Thanks for your Central Aero Enquiry!',
          dynamicTemplateData: {
            subject: 'Thanks for your Central Aero Enquiry!',
            team: req.body.team,
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            message: req.body.message,
          }
        }
        sendgrid.send(msg);
        msg.to = "daniel@thoughtfulhq.com";
        sendgrid.send(msg);
        res.status(200).json({
          message: "I will send email",
        })
      },
      error => {
        console.error(error)
        if (error.response) {
          return res.status(500).json({
            error: error.response,
          })
        }
      }
    )
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: "There was an error", error: err })
  }
}
