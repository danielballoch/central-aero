import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from 'styled-components'

const Wrapper = styled.div`
/* padding-top: 200px; */
padding: 200px 20px 100px 20px;
font-family: 'segoe ui';
margin: auto;
max-width: 900px;
.button-div {
    .button2 {
        margin-left: 40px;
    }
}
.button1 { 
    width: fit-content;
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
.button2{
    width: fit-content;
    padding: 10px 20px;
    /* height: 60px; */
    border-radius: 8px;
    font-weight: 600;
    border: 3px solid black;
    text-decoration: none;
    transition: .3s;
    text-transform: uppercase;
    background-color: white;
    color: black;
    :hover {
        cursor: pointer;
        color: white;
        background-color: black;
    }
}
@media(max-width: 500px){
    .button-div {
        display: flex;
        flex-direction: column;
        .button2 {
            margin-left: 0;
            margin-top: 20px;
        }
    }
}
`

export default function TermsAndConditions(){
  return (
    <Layout invert="true">
        <Wrapper id="top">
            <h1>Terms And Conditions</h1>
            <p>"insert terms and conditions"</p>
            <h2>Warrenty</h2>
            <p>"Insert warrenty"</p>
            <h2>Privacy</h2>
            <p>Central Aero ("us", "we", or "our") operates http://www.centralaero.nz (the "Site"). This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site. We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.
            Information Collection And Use While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name ("Personal Information").</p>
            <p><b>Log Data:</b></p>
            <p>Like many site operators, we collect information that your browser sends whenever you visit our Site (&quot;Log Data&quot;).</p>
            <p>This Log Data may include information such as your computer's Internet Protocol (&quot;IP&quot;) address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.</p>

            <p>In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this.</p>

            <p>The Log Data section is for businesses that use analytics or tracking services in websites or apps, like Google Analytics.</p>

            <p><b>Communications:</b></p>

            <p>We may use your Personal Information to contact you with newsletters, marketing or promotional materials and other information that ...</p>

            <p>The Communications section is for businesses that may contact users via email (email newsletters) or other methods.</p>

            <p><b>Cookies:</b></p>

            <p>Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive.</p>

            <p>Like many sites, we use &quot;cookies&quot; to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.</p>

            <p><b>Security:</b></p>

            <p>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>

            <p><b>Changes To This Privacy Policy:</b></p>

            <p>This Privacy Policy is effective as of 05/10/2021 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.</p>

            <p>We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.</p>

            <p>If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website.</p>

            <p><b>Contact Us:</b></p>

            <p>If you have any questions about this Privacy Policy, please contact us.</p>
        </Wrapper>      
    </Layout>
  )
}

export const Head = () => <Seo 
title="Terms And Conditions | Central Aero" 
description="Read through our terms and conditions for information on our aircraft engineering and electrical component Warranties, product information, Privacy Policy, etc"    
/>