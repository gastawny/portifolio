import { useRef, useState } from 'react'
import './Form.scss'
import emailjs from '@emailjs/browser'

interface IDatas {
  name: string,
  email: string,
  phoneNumber: string,
  text: string
}

const initialValueDatas: IDatas = {
  name: '',
  email: '',
  phoneNumber: '',
  text: ''
}

const Form = () => {
  const [datas, setDatas] = useState<IDatas>(initialValueDatas)
  const messageSent = useRef<HTMLSpanElement>(null)
  const messageUnset = useRef<HTMLSpanElement>(null)

  async function sendEmail(event: React.FormEvent) {
    event.preventDefault()

    const templateParams = {
      name: datas.name,
      email: datas.email,
      phoneNumber: datas.phoneNumber,
      text: datas.text,
    }

    setDatas(() => initialValueDatas)

    try {
      emailjs.send('service_v38xswk', 'template_mhkprro', templateParams, 'Ka9rrubGiMBIiVrY2')
      setTimeout(() => messageSent.current?.classList.toggle('active'), 2000);
      messageSent.current?.classList.toggle('active')
    } catch (error) {
      setTimeout(() => messageUnset.current?.classList.toggle('active'), 2000);
      messageUnset.current?.classList.toggle('active')
    }

  }

  const inputChange = (type: string, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDatas(datas => { return { ...datas, [type]: event.target.value } })
  }

  return (
    <div className='Form'>
      <div className="box">
        <div className="form">
          <form onSubmit={sendEmail}>
            <div className='container'>
              <h2>Contact Me</h2>
              <div className="row100">
                <div className="col">
                  <div className="inputBox">
                    <input value={datas.name} onChange={event => inputChange('name', event)} type='text' name='' required />
                    <span className="text">Name</span>
                    <span className='line'></span>
                  </div>
                </div>
                <div className="col">
                  <div className="inputBox">
                    <input value={datas.email} onChange={event => inputChange('email', event)} type='text' name='' required />
                    <span className="text">Email</span>
                    <span className='line'></span>
                  </div>
                </div>
                <div className="col">
                  <div className="inputBox">
                    <input value={datas.phoneNumber} onChange={event => inputChange('phoneNumber', event)} type='text' name='' required />
                    <span className="text">Phone Number</span>
                    <span className='line'></span>
                  </div>
                </div>
              </div>
              <div className="row100">
                <div className="col">
                  <div className="inputBox textarea">
                    <textarea value={datas.text} onChange={event => inputChange('text', event)} required></textarea>
                    <span className="text">Type your message here</span>
                    <span className='line'></span>
                  </div>
                </div>
              </div>
              <div className="row100">
                <div className="col">
                  <input type='submit' value='Send' />
                  <span ref={messageSent} className='message'>Message sent</span>
                  <span ref={messageUnset} className='message'>Message unset</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form