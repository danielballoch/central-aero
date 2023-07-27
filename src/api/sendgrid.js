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


    if (req.body) {
        console.log(req.body)
        let spam = "";
        if(req.body.Fax || req.body.NZ){
            spam = " (spam)"
        }
      message.to = process.env.SENDGRID_AUTHORIZED_EMAIL
      message.subject = "Form Submission from "+ req.body.name + spam
      message.text = "Name: " + req.body.name + " Phone: " + req.body.phone + " Email: " + req.body.email + " Message: " + req.body.message  
      message.html = "Name: " + req.body.name + "<br/>" + " Phone: " + req.body.phone + "<br/>" + " Email: " + req.body.email + "<br/>" + "<br/>" + " Message: " + req.body.message 
    }

    return sendgrid.send(message).then(
      () => {
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
