'use client'

import Contact from '@/components/screens/Contact'
import { useState } from 'react'
import emailjs from 'emailjs-com'

const initalValues = {
  name: '',
  email: '',
  phoneNumber: '',
  message: '',
}

export default function ContactPage() {
  const [form, setForm] = useState(initalValues)
  const [submitMessage, setSubmitMessage] = useState('')

  const inputChange = (
    type: string,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((datas) => {
      return { ...datas, [type]: event.target.value }
    })
  }

  async function sendEmail(event: React.FormEvent) {
    event.preventDefault()

    const templateParams = {
      name: form.name,
      email: form.email,
      phoneNumber: form.phoneNumber,
      text: form.message,
    }

    setForm(() => initalValues)

    try {
      emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY as string
      )
      setSubmitMessage('Message Sent!')
    } catch (error) {
      setSubmitMessage('Message unset!')
    }
    setTimeout(() => setSubmitMessage(''), 2000)
  }

  return (
    <Contact.Root onSubmit={sendEmail} message={submitMessage}>
      <Contact.Input value={form.name} onChange={(event) => inputChange('name', event)}>
        Name
      </Contact.Input>
      <Contact.Input value={form.email} onChange={(event) => inputChange('email', event)}>
        Email
      </Contact.Input>
      <Contact.Input
        value={form.phoneNumber}
        onChange={(event) => inputChange('phoneNumber', event)}
      >
        Phone Number
      </Contact.Input>
      <Contact.Input
        type="textarea"
        value={form.message}
        onChange={(event) => inputChange('message', event)}
      >
        Type your message here
      </Contact.Input>
    </Contact.Root>
  )
}
