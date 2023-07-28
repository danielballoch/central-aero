import React, {useRef, useEffect, useState} from "react"
import styled from "styled-components"
import BackgroundImage from "../images/engineering-images/Hero2Dark.png"
import { useForm } from "react-hook-form"
import ReCAPTCHA from "react-google-recaptcha";

const FormDiv = styled.div`
padding: 100px 0;
display: flex;
justify-content: center;
align-items: center;
background-color: #543C3C;
/* height: 800px; */
background-image: url(${BackgroundImage});
background-size: contain;
background-position: center;
background-filter: brightness(10%);
form {
    width: 600px;
    min-height: 500px;
    height: 100%;
    max-height: 800px;
    background-color: white;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
        margin-top: 0;
    }
    label {
        margin-top: 10px;
        margin-bottom: 2px;
    }
    input,textarea {
        font-size: 16px;
        padding: 5px;
    }
    textarea {
        max-width: 100%;
        height: 100px;
    }
    button {
        margin-top: 20px;
        padding: 10px 20px;
        /* height: 60px; */
        border-radius: 8px;
        font-weight: 600;
        border: 3px solid black;
        background-color: black;
        color: white;
        text-decoration: none;
        transition: .3s;
        :hover {
            cursor: pointer;
            
        }
    }
    .message {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: -40px;
        position: absolute;
        z-index: 100;
        max-width: 600px;
        width: 100vw;
        height: 0px;
        overflow: hidden;
        color: rgba(255,255,255,0);
        background-color: rgba(255,255,255,0);
        transition: background-color .5s ease, color .5s ease,  height 2s;
        p, h2 {
            transition: color .5s ease;
            color: rgba(255,255,255,0);
        }
        div {
            width: 90vw;
            max-width: 450px;
        }
    }
    .sent {
        color: black;
        transition: background-color .5s ease, color .5s ease;
        height: 500px;
        background-color: rgba(255,255,255,.9);
        p, h2 {
            transition: color .5s ease;
            color: black;
        }
    }
}
.info-div {
    align-self: center;
    margin-left: 40px;
    color: white;
    width: 500px;
    h2 {
        margin: 0 0 20px 0;
        color: white;
        padding-bottom: 40px;
        border-bottom: 10px solid white;
    }
    .contacts-div {
        max-width: 500px;
        display: flex;
        flex-wrap: wrap;

        div {
            max-width: 200px;
            margin-right: 20px;
        }
    }
}
@media(max-width:1200px){
    flex-direction: column;
    .info-div {
        margin-left: 0;
        padding: 20px;
        h2 {
            margin: 40px 0px 20px;
        }
    }

}
@media(max-width:763px){
    h1 {
        font-size: 60px!important;
    }
}
@media(max-width:600px){
    form {
        max-width: 600px!important;
        width: 100vw!important;
        padding: 40px!important;
    }
    .info-div {
        width: 100vw;
        padding: 20px;
    }
}
@media(max-width:380px){
    form {
        h2 {
            font-size: 28px; 
        }
    }
}
`

export default function ContactElectrical({formEmail,title, infoTitle, infoNumber, infoContacts}){
    const reRef = useRef();
    const [serverState, setServerState] = useState({formSent: false});

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()


      async function onSubmit(data){
        // const reRef = useRef<>();
        const token = await reRef.current.executeAsync();
        reRef.current.reset();
        // console.log("this is where form data should log")
        // console.log(data)
        // console.log(token)
        
        
        fetch(`/api/sendgrid`, {
          method: `POST`,
          body: JSON.stringify({
            name: data.Name,
            phone: data.Phone,
            email: data.Email,
            message:data.Message,
            token,
        }),
          headers: {
            "content-type": `application/json`,
          },
        })
          .then(res => res.json())
          .then(body => {
            console.log(`response from API:`, body);
          })
          .then(setServerState({formSent: true}))
      }
      console.log({ errors })
      useEffect(() => {
          if (serverState.formSent === true) {
            setTimeout(() => {
                setServerState({
                    formSent: false
                })
            }, 3000)
          }
      })
  return (
            <FormDiv>
                <ReCAPTCHA 
                    sitekey={process.env.GATSBY_RE_SITEKEY} 
                    size="invisible"
                    ref={reRef} 
                />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={serverState.formSent === true ? "message sent" : "message"}>
                        <div>
                            <h2>Your message has been sent!</h2>
                            <p>Thanks for enquiring with Central Aero. We'll be in touch as soon as possible.</p>
                        </div>
                    </div>
                    <h2>{title}</h2>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text" 
                        name="name" 
                        required  
                        {...register("Name", { required: true, maxLength: 100 })} 
                    />
                    
                    <label htmlFor="email">Email: </label>
                    <input  
                        type="email" 
                        name="email" 
                        required
                        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
                    />
    
                    <label htmlFor="phone">Phone: </label>
                    <input 
                        type="phone" 
                        name="phone" 
                        required
                        {...register("Phone", { required: true})}
                    />
                   
                    <label htmlFor="message">Message:</label>
                    <textarea
                         name="message" 
                        id="message" 
                        rows="5" 
                        required
                        {...register("Message", { required: true, maxLength: 2000 })} 
                    />
                    
                    <button
                        type="submit" 
                        class="g-recaptcha"
                        data-sitekey="site_key"
                        data-callback='onSubmit'
                        data-action='submit'
                    >
                    Send Message</button>
                </form>
                <div className="info-div">
                    <h2><b>{infoTitle}</b> {infoNumber}</h2>
                    <div className="contacts-div">
                        {infoContacts.map(contact => (
                            <div>
                            <p><b>{contact.name}</b><br/>{contact.position}<br/>{contact.email}<br/>{contact.phone}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </FormDiv>
  )
}