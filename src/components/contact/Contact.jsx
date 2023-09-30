import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
    const[user, setUser] = useState(
        {
            name: '', email: '', subject: '', message: ''
        }
    )
    let values, names
    const data = (e) => {
        values = e.target.value
        names = e.target.name
        setUser({...user, [names]: values})
    }

    const send = async (e) => 
    {
        const {Name, email, subject, Message} = user
        e.preventDefault()
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify({
                Name, email, subject, Message
            })
        }

        const send = await fetch(
            'https://react-ecommerce-contact-default-rtdb.firebaseio.com/Message.json', option
            )

        if (send) {
            alert("Message Sent")
        }
        else
        {
            alert("Error Occoured Message Sent failed")
        }

    }
  return (
    <>
    <div className="contact">
        <div className="container">
            <div className="form">
                <h2>#contact us</h2>
                <form action="Post">
                    <div className="box">
                        <div className="lable">
                            <h4>name</h4>
                        </div>
                        <div className="input">
                            <input type="text" placeholder='name' value={user.name} name='name'  onChange={data} />
                        </div>
                    </div>
                    <div className="box">
                        <div className="lable">
                            <h4>E-mail</h4>
                        </div>
                        <div className="input">
                            <input type="email" placeholder='E-mail' value={user.email} name='email'  onChange={data} />
                        </div>
                    </div>
                    <div className="box">
                        <div className="lable">
                            <h4>Subject</h4>
                        </div>
                        <div className="input">
                            <input type="text" placeholder='subject' value={user.subject} name='subject'  onChange={data} />
                        </div>
                    </div>
                    <div className="box">
                        <div className="lable">
                            <h4>Message</h4>
                        </div>
                        <div className="input">
                            <textarea name="message" value={user.message} placeholder='message' id="" cols="30" rows="10" onChange={data}></textarea>
                        </div>
                    </div>
                    <button type='sublit'onClick={send}>send</button>
                </form>
            </div>

        </div>
    </div>
    </>
  )
}

export default Contact