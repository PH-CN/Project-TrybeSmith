interface Order {
  id: number,
  userId: number
}

interface OrderIds extends Order {
  productsIds: number[]
}

export { Order, OrderIds };