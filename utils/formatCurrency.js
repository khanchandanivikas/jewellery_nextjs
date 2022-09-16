export const formatCurrency = (amount = 0, currency = "EUR") =>
  new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency,
    minimumIntegerDigits: 2,
  }).format(amount);