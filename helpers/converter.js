export const convertMoney = (money) => {
   const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
   });

   return formatter.format(money);
};
