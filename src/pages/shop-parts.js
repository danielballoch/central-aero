import React, {useRef, useEffect, useState} from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import {PortableText} from '@portabletext/react'
import Layout from "../components/layout"
import { useForm } from "react-hook-form"
import ReCAPTCHA from "react-google-recaptcha";
import { GatsbyImage} from "gatsby-plugin-image"
import Seo from "../components/seo"

const ElectricalProducts = styled.div`
padding-top: 140px;
p {
    font-size: 16px;
}

button {
    min-width: 180px;
    height: fit-content;
    /* width: fit-content; */
    padding: 10px 20px;
    /* height: 60px; */
    border-radius: 8px;
    font-weight: 600;
    border: 3px solid black;
    background-color: black;
    color: white;
    text-decoration: none;
    transition: .3s;
    text-transform: uppercase;
    :hover {
        cursor: pointer;
    }
}
input,textarea {
    font-size: 16px;
    padding: 5px;
}
select {
    background-color: white;
    padding: 7px;
    border: solid 1px #333;
    border-radius: 5px;
}
.wrapper{
    max-width: 1280px;
    margin: auto;
    
}
.products-top{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    /* background-color: lightblue; */
    margin: 5px;
    h1 {
        
        font-weight: 600;
        margin: 5px 5px 20px 5px;
    }
}
.filters {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
}
.content-wrapper{
    display: flex;
    justify-content: center;
    max-width: 1280px;
    width: 98vw;
}
.content-left{
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    /* background-color: lightblue; */
    position: sticky;
    top: 50px;
    max-height: 1000px;
    height: fit-content;
    margin: 120px 5px;
    max-width: 480px; 
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 40px;
    h2 {
        margin: 10px 0;
    }
    p {
        margin-bottom: 10px;
    }
    button {
        margin: 10px 0;
    }
    label {
        margin: 5px 0;
    }
    textarea {
        min-height: 100px;
        height: auto;
        max-width: 413px;
    }
    @media(max-height: 860px){
        /* height: fit-content; */
    }
    .message {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: -40px;
        position: absolute;
        z-index: 100;
        max-width: 440px;
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
            max-width: 350px;
        }
    }
    .sent {
        color: black;
        transition: background-color .5s ease, color .5s ease;
        height: 714px;
        background-color: rgba(255,255,255,.9);
        p, h2 {
            transition: color .5s ease;
            color: black;
        }
    }
}
.content-right {
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-left: 5px;
display: flex;
/* margin-top: 80px; */
flex-wrap: wrap;
/* max-width: 50%; */
width: 100%;
box-sizing: border-box;
@media(max-width: 1305px){
}
@media(max-width: 1170px){
    width: 260px!important;
}
@media(max-width: 1304px){
     width: 560px;
    h3 {
        font-size: 20px;
    }
}
h3 {
    box-sizing: border-box;
    text-align: center;
    /* width: 100%; */
    /* width: fit-content; */
    background-color: black;
    color: white;
    padding: 20px 40px;
    /* margin: auto; */
    margin-left: 10px;
    margin-bottom: 0;
    margin-right: 10px;
    margin-top: 120px;
    font-weight: 400;
    border-radius: 5px;
}
.title-div {
    width: 100%;
    box-sizing: border-box;
}
}
.part-item{
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    max-width: 260px;
    /* width: 31%; */
    /* background-color: lightblue; */
    margin: 10px 7px;
    text-decoration: none;
    .gatsby-image-wrapper {
        // width: 260px;
    }
    img {
        object-fit: contain!important;
        height: 200px;
        width: 100%;
        background-color: lightgrey;
    }
    p {
        margin: 0;
        padding: 0 10px;
        color: #333;
        text-decoration: none;
        :first-of-type {
            margin-top: 10px;
        }
        :last-of-type{
            margin-bottom: 10px;
        }
    }
}
@media(max-width: 580px){
    .content-wrapper {
        flex-direction: column!important;
        align-items: center;
        width: 100vw!important;
        .content-left {
            position: static;
            width: 96%;
            padding: 30px;
            margin: 0;
        }
        .content-right {
            width: 100%!important;
            margin-left: 0;
            .part-item {
                /* transform: scale(.5); */
                width: 150px;
                /* height: fit-content; */
                img {
                    // height: 100px;
                    width: 100%;
                }
            }
        }
    }
}
.section2 {
width: 100%;
max-width: 840px;
}
.section2-items {
display: flex;
flex-wrap: wrap;
justify-content: center;
}
`

function Section2({title, products}){
    if (title){
    return (       
        <div className="section2">    
            <div className="title-div"><h3>{title}</h3></div>
            <div className="section2-items">
            {products.map(post => {
                const title = post.component_title || post.component_path
                return (
                    <Link to={post.component_path} itemProp="url" className="part-item">
                            <GatsbyImage image={post.component_image.asset.gatsbyImage} alt={title} placeholder="blur"/>
                            <p><b>{title}</b></p>
                            <p>In Stock</p>
                    </Link>
                )
            })}
            </div>
        </div>  
    )
    }
}

const BlogIndex = ({ data, location }) => {
    let phone = data.contact.nodes[0].electrical_phone
    let general = data.general.nodes[0]
    const reRef = useRef();
    const [serverState, setServerState] = useState({
        formSent: false,
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()


      async function onSubmit(data){
        const token = await reRef.current.executeAsync();
        reRef.current.reset();  
        
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
  const siteTitle = `Title`
  const repairProducts = data.repair.nodes
  const orderProducts = data.order.nodes 

  if (repairProducts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <p>
          No products found. Please reload or contact 07 843 2936 or hamish@centralaero.nz for help.
        </p>
      </Layout>
    )
  }
  return (
    <Layout location={location} title={siteTitle} invert={true}>
        <ReCAPTCHA 
            sitekey={process.env.GATSBY_RE_SITEKEY} 
            size="invisible"
            ref={reRef} 
        />
        <ElectricalProducts id="top">
        <div className="wrapper">
            <div className="content-wrapper">
                <form className="content-left" onSubmit={handleSubmit(onSubmit)}>
                    <div className={serverState.formSent === true ? "message sent" : "message"}>
                        <div>
                            <h2>Enquiry Sent!</h2>
                            <p>Thanks for contacting Central Aero. We'll be in touch as soon as possible.</p>
                        </div>
                    </div>
                    <h2>{general.form_title}</h2>
                    <p><PortableText value={general.form_text}/></p>
                    <label htmlFor="name">Name:</label>
                    <input type="text" 
                        name="name" 
                        required  
                        {...register("Name", { required: true, maxLength: 100 })} 
                    />
                    <label>Email:</label>
                    <input  
                        type="email" 
                        name="email" 
                        required
                        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
                    />
                    <label>Phone:</label>
                    <input 
                        type="phone" 
                        name="phone" 
                        required
                        {...register("Phone", { required: true})}
                    />
                    <label>Part Number/Description</label>
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
                    >SEND ENQUIRY</button>
                </form>
                
                {general.show_section1 && general.show_section2?
                <div className="content-right">
                    <Section2 title={general.section1_title} products={repairProducts}/>
                    <Section2 title={general.section2_title} products={orderProducts}/> 
                </div>  
                :general.show_section1 ?
                <div className="content-right">
                    <Section2 title={general.section1_title} products={repairProducts}/>
                </div> 
                :general.show_section2 ?
                <div className="content-right">
                    <Section2 title={general.section2_title} products={orderProducts}/> 
                </div> 
                :
                <div className="content-right">
                    <p>No products found. Please reload or contact 07 843 2936 or hamish@centralaero.nz for help.</p>
                </div>
                }
            </div>
        </div>
        </ElectricalProducts>
    </Layout>
  )
}

export default BlogIndex

export const Head = () => <Seo 
title="Shop Quality Aircraft Parts & Components | Central Aero"
description="Starter Generators, Magnetos, Fuel Pumps etc from trusted brands such as Skurka, Safran, Champion and Hartzel. Buy electrical parts new, exchange or overhaul." 
/>

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    repair: allSanityElectricalComponents(filter: { component_type: {eq: "repair"}}, sort: { component_title: ASC }) {
        nodes {
            component_title
            component_subtext
            component_path
            blurb
            component_image {
                asset {
                    gatsbyImage(width:860)
                }
            }
            component_content {
                _type
                style
                children {
                    text
                    _type
                }
            }
        }
    }
    order: allSanityElectricalComponents(filter: { component_type: {eq: "order"}}, sort: { component_title: ASC }) {
        nodes {
            component_title
            component_subtext
            component_path
            blurb
            component_image {
                asset {
                    gatsbyImage(width:860)
                }
            }
            component_content {
                _type
                style
                children {
                    text
                    _type
                }
            }
        }
    }
    contact: allSanityContactPhoneNumbers{
        nodes {
            electrical_phone
        }
    }
    general: allSanityShopParts {
        nodes {
          form_title
          form_text {
            _type
            style
            children {
                text
                _type
            }
          }
          section1_title
          show_section1
          section2_title
          show_section2
        }
    }
  
}
`