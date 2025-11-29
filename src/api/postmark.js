// Require:
var postmark = require("postmark");

// Send an email:
var client = new postmark.ServerClient(process.env.POSTMARK_AUTH);

//validate token through google
async function validateHuman(token){
  // console.log("validate human running")
const secret = process.env.GATSBY_RECAPTCHA_SECRET;
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
  console.log(req.body);
  // const human = await validateHuman(req.body.token);
  // if (!human){
  //     // console.log("this message shows we're getting to the !human part")
  //     res.status(400);
  //     res.json({errors: ["Please, you're not fooling us, bot."]})
  //     return;
  // }
  try {
    let message = {
      "From": "hamish@centralaero.nz",
      "To": req.body.email,
      "ReplyTo": "hamish@centralaero.nz",
      "TemplateId" : 42350858,
      "TemplateModel": {
        "team":req.body.team,
        "name": req.body.name,
        "email": req.body.email,
        "phone": req.body.phone,
        "message": req.body.message
      },
      "MessageStream": "outbound"
    }
    if (req.body.team === "Engineering"){message.ReplyTo = "stephen@centralaero.nz"}
    await client.sendEmailWithTemplate(message)
    console.log("customer-email-sent")
    message.ReplyTo = req.body.email
    // if (req.body.team === "Engineering"){message.To = "paul@centralaero.nz"}
    message.To = "hamish@centralaero.nz"
    if (req.body.team === "Engineering"){message.To = "stephen@centralaero.nz"}
    await client.sendEmailWithTemplate(message)
    console.log("central-aero-email-sent")
    message.To = "daniel@thoughtfulhq.com"
    await client.sendEmailWithTemplate(message)
    console.log("backup-email-sent")
    // console.log("client-support-sent")
    // message.To = "danielkingballoch@gmail.com"
    // message.ReplyTo = "danielkingballoch@gmail.com"
    // console.log(message)
    // await client.sendEmailWithTemplate(message)
    // console.log("backup-support-sent")
    return res.status(200).json({
      message: "Support Form sent successfully",
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: "There was a form error", error: err })
  }
}
