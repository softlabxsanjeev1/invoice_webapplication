import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MainDetails from './components/MainDetails'
import ClientDetails from './components/ClientDetails'
import Dates from './components/Dates'
import Table from './components/Table'
import Notes from './components/Notes'
import Footer from './components/Footer'

function App() {
  const [showInvoice, setShowInvoice] = useState(false)
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [bankName, setBankName] = useState("")
  const [accountNumber, setAccountNumber] = useState("")
  const [website, setWebsite] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [notes, setNotes] = useState("")

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className='bg-slate-400'>
      <main className='m-5 p-5 md:max-w-xl md:mx-auto xl:max-w-4xl lg:max-w-2xl border-2  rounded shadow'>
        {/* children components*/}
        {
          showInvoice ? (
            <div>
              <Header handlePrint={handlePrint} />
              <MainDetails name={name} address={address} />
              <ClientDetails clientName={clientName} clientAddress={clientAddress} />
              <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />
              <Table />
              <Notes notes={notes} />
              <Footer
                name={name}
                website={website}
                email={email}
                phone={phone}
                bankName={bankName}
                accountNumber={accountNumber}
              />
              <button
                onClick={() => setShowInvoice(false)}
                className="mt-5 bg-blue-500 text-white font-bold
                py-2 px-8 rounded shadow border-2 border-blue-500
                hover:bg-transparent hover:text-blue-500 transition-all
                duration-300">Edit Information</button>
            </div>
          ) : (
            <>
              {/* name ,address, email,phone, bank name, bank account number, website, client name,
            client address, invoice number, invoice date, due date, notes */}
              <div className="flex flex-col justify-center">
                <label htmlFor='name'>Enter Your name</label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Enter your name'
                  autoComplete='off'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor='address'>Enter Your Address</label>
                <input
                  type='text'
                  name='address'
                  id='address'
                  placeholder='Enter your address'
                  autoComplete='off'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <label htmlFor='email'>Enter Your Email</label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter your Email'
                  autoComplete='off'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='phone'>Enter Your Phone number</label>
                <input
                  type='number'
                  name='phone'
                  id='phone'
                  placeholder='Enter your Phone'
                  autoComplete='off'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <label htmlFor='bankName'>Enter Your Bank Name</label>
                <input
                  type='text'
                  name='bankName'
                  id='bankName'
                  placeholder='Enter your Bank Name'
                  autoComplete='off'
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                />
                <label htmlFor='accountNumber'>Enter Your Account Number</label>
                <input
                  type='number'
                  name='accountNumber'
                  id='accountNumber'
                  placeholder='Enter your Account Number'
                  autoComplete='off'
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                />
                <label htmlFor='website'>Enter Website Name</label>
                <input
                  type='url'
                  name='text'
                  id='website'
                  placeholder='Enter  Website Name'
                  autoComplete='off'
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
                <label htmlFor='clientName'>Enter Client Name </label>
                <input
                  type='text'
                  name='clientName'
                  id='clientName'
                  placeholder='Enter client name'
                  autoComplete='off'
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                />
                <label htmlFor='clientAddress'>Enter Client Address</label>
                <input
                  type='text'
                  name='text'
                  id='clientAddress'
                  placeholder='Enter client address'
                  autoComplete='off'
                  value={clientAddress}
                  onChange={(e) => setClientAddress(e.target.value)}
                />
                <label htmlFor='invoiceNumber'>Enter Invoice number</label>
                <input
                  type='number'
                  name='invoiceNumber'
                  id='invoiceNumber'
                  placeholder='Enter invoice number'
                  autoComplete='off'
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                />
                <label htmlFor='invoiceDate'>Enter Invoice date</label>
                <input
                  type='date'
                  name='invoiceDate'
                  id='invoiceDate'
                  placeholder='Enter invoice Date'
                  autoComplete='off'
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                />
                <label htmlFor='dueDate'>Select Due Date</label>
                <input
                  type='date'
                  name='dueDate'
                  id='dueDate'
                  placeholder='Select due date'
                  autoComplete='off'
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
                <label htmlFor='notes'>Additional note</label>
                <textarea
                  name='notes' id='notes' cols="30"
                  rows="10" placeholder='Additional notes to client'
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                ></textarea>
                <button
                  onClick={() => setShowInvoice(true)}
                  className=" mt-5 bg-blue-500 text-white font-bold
                py-2 px-8 rounded shadow border-2 border-blue-500
                hover:bg-transparent hover:text-blue-500 transition-all
                duration-300">Preview Invoice</button>
              </div>
            </>
          )}
      </main>
    </div>
  )
}

export default App
