import { useRef, useState } from 'react'
import './App.css'
import Header from './components/Header'
import MainDetails from './components/MainDetails'
import ClientDetails from './components/ClientDetails'
import Dates from './components/Dates'
import Table from './components/Table'
import Notes from './components/Notes'
import Footer from './components/Footer'
import TableForm from './components/TableForm'
import ReactToPrint from 'react-to-print'

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
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(0)
  const [price, setPrice] = useState(0)
  const [amount, setAmount] = useState("")
  const [list, setList] = useState([])
  const [total, setTotal] = useState(0)

  const componentRef = useRef()

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className='bg-slate-400'>
      <main className='m-5 p-5 md:max-w-xl md:mx-auto xl:max-w-4xl lg:max-w-2xl border-2  rounded shadow'>
        {/* children components*/}
        {showInvoice ? (
          <>
            <ReactToPrint
              trigger={() => <button
                className="ml-5 bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-gray-500
                hover:bg-transparent hover:text-gray-500 transition-all duration-300">Print / Download</button>}
              content={() => componentRef.current}
            />
            <div ref={componentRef} className='p-5'>
              {/* <Header handlePrint={handlePrint} /> */}
              <MainDetails name={name} address={address} />
              <ClientDetails clientName={clientName} clientAddress={clientAddress} />
              <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />
              <Table description={description}
                quantity={quantity}
                price={price}
                amount={amount}
                list={list}
                setList={setList}
                total={total}
                setTotal={setTotal}
              />
              <Notes notes={notes} />
              <Footer
                name={name}
                website={website}
                email={email}
                phone={phone}
                bankName={bankName}
                accountNumber={accountNumber}
              />
            </div>
            <button
              onClick={() => setShowInvoice(false)}
              className="mt-5 bg-blue-500 text-white font-bold
                py-2 px-8 rounded shadow border-2 border-blue-500
                hover:bg-transparent hover:text-blue-500 transition-all
                duration-300">Edit Information</button>
          </>
        ) : (
          <>
            {/* name ,address, email,phone, bank name, bank account number, website, client name,
            client address, invoice number, invoice date, due date, notes */}
            <div className="flex flex-col justify-center">
              <article className='md:grid grid-cols-2 gap-10'>
                <div className='flex flex-col'>
                  <label htmlFor='name'>Your full name</label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Enter your name'
                    autoComplete='off'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className='flex flex-col'>
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
                </div>
              </article>


              <article className='md:grid grid-cols-3 gap-10'>
                <div className='flex flex-col'>
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
                </div>
                <div className='flex flex-col'>
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
                </div>
                <div className='flex flex-col'>
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
                </div>
              </article>
              <article className='md:grid grid-cols-2 gap-10'>
                <div className='flex flex-col'>
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
                </div>
                <div className='flex flex-col'>
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
                </div>
              </article>


              <article className='md:grid grid-cols-2 gap-10 md:mt-16'>
                <div className='flex flex-col'>
                  <label htmlFor='clientName'>Enter Your Client Name </label>
                  <input
                    type='text'
                    name='clientName'
                    id='clientName'
                    placeholder='Enter client name'
                    autoComplete='off'
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='clientAddress'>Enter Your Client Address</label>
                  <input
                    type='text'
                    name='text'
                    id='clientAddress'
                    placeholder='Enter client address'
                    autoComplete='off'
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                  />
                </div>
              </article>
              <article className='md:grid grid-cols-3 gap-10'>
                <div className='flex flex-col'>
                  <label htmlFor='invoiceNumber'>Invoice number</label>
                  <input
                    type='number'
                    name='invoiceNumber'
                    id='invoiceNumber'
                    placeholder='Enter invoice number'
                    autoComplete='off'
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='invoiceDate'>Invoice date</label>
                  <input
                    type='date'
                    name='invoiceDate'
                    id='invoiceDate'
                    placeholder='Enter invoice Date'
                    autoComplete='off'
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='dueDate'>Due Date</label>
                  <input
                    type='date'
                    name='dueDate'
                    id='dueDate'
                    placeholder='Select due date'
                    autoComplete='off'
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
              </article>
              <section>
                <TableForm
                  description={description} setDescription={setDescription}
                  quantity={quantity} setQuantity={setQuantity}
                  price={price} setPrice={setPrice}
                  amount={amount} setAmount={setAmount}
                  list={list} setList={setList}
                  total={total} setTotal={setTotal}
                />
              </section>

              <label htmlFor='notes'>Additional notes</label>
              <textarea
                name='notes' id='notes' cols="30"
                rows="5" placeholder='Additional notes to client'
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
