// @desc GET ALL TRANSACTIONS
// @route /api/v1/transactions
// @access Public
exports.getTransactions = (req, res, next) => {
  res.send('GET transactions');
}

// @desc POST TRANSACTIONS
// @route POST /api/v1/transactions
// @access Public
exports.addTransaction = (req, res, next) => {
  res.send('POST transactions');
}

// @desc Delete TRANSACTIONS
// @route Delete /api/v1/transactions/:id
// @access Public
exports.deleteTransaction = (req, res, next) => {
  res.send('DELETE transactions');
}

