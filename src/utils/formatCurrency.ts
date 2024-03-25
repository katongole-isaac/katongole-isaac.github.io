const formatCurrency = (amount: number) => {
  const currencyFormatting = new Intl.NumberFormat(
    navigator.language ?? "en-US",
    {
      style: "currency",
      currency: "USD",
    }
  ).format(amount);

  return currencyFormatting;
};

export default formatCurrency;
