const Order = require('../model/Order')

const createOrder = async (req,res) => {
  try{
    const {items, totalAmount, address, paymentId } = req.body
    if(!items || items.length === 0 || !totalAmount || !address){
      return res.status(400).json({ message: 'Invalid order data'})
    }
    else{
      const order = new Order({
        user: req.user._id,
        items,
        totalAmount,
        address,
        paymentId
      })
      await order.save()
      
      res.status(201).json({ message: ' order created successfully ', order})
    }
  }catch(error){
    console.log(error)
    res.status(500).json({message: 'Error creating order',error})
  }
}

const getOrders = async (req,res) => {
  try{
    const orders = await Order.find({}).populate('user','id name')
    res.json(orders)
  }catch(error){
    console.log(error)
    res.status(500).json({ message: 'Error fetching orders', error })
  }
}

const myOrders = async (req,res) => {
  try{
    const orders = await Order.find({ user: req.user._id }).populate('items.productId','name price')
    res.json(orders)
  }catch(error){
    res.status(500).json({message:'error fetching orders',error})
  }
}

const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    console.log('Order ID:', req.params.id);
    console.log('New Status:', status);

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        message: 'Order not found'
      });
    }

    order.status = status;

    const updatedOrder = await order.save();

    return res.status(200).json({
      message: 'Order status updated successfully',
      order: updatedOrder
    });

  } catch (error) {
    console.error('UPDATE ORDER STATUS ERROR:', error);

    return res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {createOrder, getOrders, myOrders, updateOrderStatus}