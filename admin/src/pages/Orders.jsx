import React, { useEffect, useState } from "react"
import axios from "axios"
import { BaseUrl } from "../utils/BaseUrl"
import ShowLoading from "../utils/ShowLoading"

const Orders = () => {
  const [orders, setOrders] = useState([])
  const [updatingStatusId, setUpdatingStatusId] = useState(null)
  const [expandedOrder, setExpandedOrder] = useState(null)
  

  const fetchOrders = async () => {
    try {
      const res = await axios.get(`${BaseUrl}/order/`)
      setOrders(res.data.data)
      console.log(res.data.data)
    } catch (err) {
      console.error("Error fetching orders:", err)
    }
  }

  const updateStatus = async (orderId, newStatus) => {
    try {
      setUpdatingStatusId(orderId)
      await axios.put(`${BaseUrl}/order/put/${orderId}`, {
        orderStatus: newStatus,
      })
      fetchOrders(); 
    } catch (err) {
      console.error("Error updating status:", err)
    } finally {
      setUpdatingStatusId(null)
    }
  }

  useEffect(() => {
    fetchOrders()
  }, [])

  const toggleOrderDetails = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId)
  }

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Processing":
        return "bg-blue-100 text-blue-800"
      case "Shipped":
        return "bg-purple-100 text-purple-800"
      case "Delivered":
        return "bg-green-100 text-green-800"
      case "Cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="p-4 w-full">
      <h2 className="text-2xl font-bold mb-4">Orders Management</h2>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Order Details
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Order Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Customer
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Amount
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.reverse().map((order) => (
              <React.Fragment key={order._id}>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button 
                      onClick={() => toggleOrderDetails(order._id)}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium cursor-pointer"
                    >
                      {expandedOrder === order._id ? "Hide Details" : "View Details"}
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.createdAt.split('T')[0]}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {order.firstName} {order.lastName}
                    </div>
                    <div className="text-sm text-gray-500">{order.emailAddress}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{order.totalAmount} RS</div>
                    <div className="text-sm text-gray-500">{order.paymentMethod}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.orderStatus)}`}
                    >
                      {order.orderStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <select
                      value={order?.orderStatus}
                      onChange={(e) => updateStatus(order._id, e.target.value)}
                      disabled={updatingStatusId === order._id}
                      className="border rounded px-2 py-1 text-sm w-full max-w-[150px]"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                </tr>

                {expandedOrder === order._id && (
                  <tr>
                    <td colSpan="5" className="px-6 py-4">
                      <div className="bg-gray-50 p-4 rounded-md">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <h4 className="text-sm font-semibold mb-2">Customer Information</h4>
                            <div className="text-xs">
                              <p>
                                <span className="font-medium">Name:</span> {order.firstName} {order.lastName}
                              </p>
                              <p>
                                <span className="font-medium">Email:</span> {order.emailAddress}
                              </p>
                              <p>
                                <span className="font-medium">Phone:</span> {order.phone}
                              </p>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold mb-2">Shipping Address</h4>
                            <div className="text-xs">
                              <p>{order.street}</p>
                              <p>
                                {order.city}, {order.zipCode}
                              </p>
                              <p>{order.country}</p>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold mb-2">Payment Details</h4>
                            <div className="text-xs">
                              <p>
                                <span className="font-medium">Method:</span> {order.paymentMethod}
                              </p>
                              <p>
                                <span className="font-medium">Status:</span> {order.paymentStatus}
                              </p>
                              <p>
                                <span className="font-medium">Total:</span> {order.totalAmount} RS
                              </p>
                            </div>
                          </div>
                        </div>

                        <h4 className="text-sm font-semibold mb-2">Products</h4>
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-gray-200 text-xs">
                            <thead className="bg-gray-100">
                              <tr>
                                <th scope="col" className="px-3 py-2 text-left font-medium text-gray-500">
                                  Product
                                </th>
                                <th scope="col" className="px-3 py-2 text-left font-medium text-gray-500">
                                  Size
                                </th>
                                <th scope="col" className="px-3 py-2 text-left font-medium text-gray-500">
                                  Image
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              {order.product?.map((item, idx) => (
                                <tr key={idx} className="hover:bg-gray-50">
                                  <td className="px-3 py-2">{item.productId.name || "Product " + idx}</td>
                                  <td className="px-3 py-2">
                                    {Object.entries(item?.size).map(([key, value]) => (
                                      <span
                                        key={key}
                                        className="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs mr-1 mb-1"
                                      >
                                        {key}: {value}
                                      </span>
                                    ))}
                                  </td>
                                  <td className="px-3 py-2">
                                    <img
                                      src={`${BaseUrl}/${item.productId.image[0]}`}
                                      className="w-16 h-16 object-cover rounded"
                                      alt="Product"
                                    />
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {orders.length === 0 && <div ><ShowLoading/></div>}
    </div>
  )
}

export default Orders
