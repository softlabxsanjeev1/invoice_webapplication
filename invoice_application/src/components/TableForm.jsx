import React, { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

function TableForm({
    description, setDescription, quantity, setQuantity,
    price, setPrice, amount, setAmount, list, setList, total, setTotal }) {
    const [isEditing, setIsEditing] = useState(false)

    // submit function
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!description || !price || !quantity) {
            alert("Please fill all inputs")
        } else {
            const newItems = {
                id: uuidv4(),
                description,
                quantity,
                price,
                amount,
            }
            setDescription("")
            setQuantity("")
            setPrice("")
            setAmount("")
            setList([...list, newItems])
            setIsEditing(false)
        }
    }


    // claculate amount function
    useEffect(() => {
        const calculateAmount = (amount) => {
            setAmount(quantity * price)
        }

        calculateAmount(amount)
    }, [amount, price, quantity, setAmount])

    // Calculate total amount
    useEffect(() => {
        let rows = document.querySelectorAll(".amount")
        let sum = 0

        for (let i = 0; i < rows.length; i++) {
            if (rows[i].className === "amount") {
                sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
                setTotal(sum)
            }
        }
    })


    // edit function
    const editRow = (id) => {
        const editingRow = list.find((row) => row.id === id)
        setList(list.filter((row) => row.id !== id))
        setIsEditing(true)
        setDescription(editingRow.description)
        setQuantity(editingRow.quantity)
        setPrice(editingRow.price)
    }

    // delete function
    const deleteRow = (id) => {
        setList(list.filter((row) => row.id !== id))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col md:mt-16">
                    <label htmlFor="description">Item description</label>
                    <input type="text" name="description" id="description"
                        placeholder="item description" value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="md:grid grid-cols-3 gap-10">
                    <div className="flex flex-col">
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" name="quantity" id="quantity"
                            placeholder="1-10" value={quantity}
                            onChange={(e) => setQuantity(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="price">Price</label>
                        <input type="number" name="price" id="price"
                            placeholder="item price" value={price}
                            onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="amount">Amount</label>
                        <p className="mt-1">&#x20B9;{"  "}{amount}</p>
                    </div>
                </div>
                <button type="submit"
                    className="mb-5 bg-blue-500 text-white font-bold
                py-2 px-8 rounded shadow border-2 border-blue-500
                hover:bg-transparent hover:text-blue-500 transition-all
                duration-300"
                >{
                        isEditing ? "Editing Row Item" : "Add Table Item"
                    }
                </button>
            </form>
            {/* table items for edit and delete */}
            <table width="100%" className="my-7">
                <thead>
                    <tr className="bg-gray-300 p-1">
                        <td className="font-bold">Description</td>
                        <td className="font-bold">Quantity</td>
                        <td className="font-bold">Price</td>
                        <td className="font-bold">Amount</td>
                    </tr>
                </thead>
                {list.map(({ id, description, quantity, price, amount }) => (
                    <React.Fragment key={id}>
                        <tbody>
                            <tr className="mt-2">
                                <td>{description}</td>
                                <td>{quantity}</td>
                                <td>{price}</td>
                                <td className="amount">{amount}</td>
                                <td className="flex flex-row">
                                    <button onClick={() => deleteRow(id)} className="mr-5">
                                        <MdOutlineDeleteOutline className="text-red-500 font-bold text-xl
                                         hover: cursor-pointer"/>
                                    </button>
                                    <button onClick={() => editRow(id)} >
                                        <CiEdit className="text-green-500 font-bold text-xl
                                        hover: cursor-pointer" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </React.Fragment>
                ))}
            </table>
            <div>
                <h3 className="flex items-end justify-end text-gray-800 text-4xl font-bold"
                >Cash. {total.toLocaleString()}</h3>
            </div>
        </>
    )
}

export default TableForm