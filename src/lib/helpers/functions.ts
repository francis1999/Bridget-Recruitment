export function getGreeting() {
  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return 'Good morning';
  } else if (currentHour >= 12 && currentHour < 18) {
    return 'Good afternoon';
  } else {
    return 'Good evening';
  }
}

export const formatAmount = (
  amount: number | string,
  currency = '₦',
  decimals = 2,
) => {
  // Remove leading zeros and non-numeric characters
  const numericAmount = parseFloat(
    amount
      ?.toString()
      .replace(/(?!^-)[^0-9.]/g, '')
      .replace(/^(-?)0+(?=\d)/, '$1'),
  );

  // Check if the amount is in the tens of millions range
  // if (numericAmount >= 1e7 && numericAmount < 1e9) {
  //   // Convert the amount to millions and round to one decimal place
  //   const millions = (numericAmount / 1e6).toFixed(1);
  //   // Append 'm' to indicate millions
  //   return `${currency} ${millions}m`;
  // } else if (numericAmount >= 1e9) {
  //   // Convert the amount to millions and round to one decimal place
  //   const millions = (numericAmount / 1e9).toFixed(1);
  //   // Append 'm' to indicate millions
  //   return `${currency} ${millions}b`;
  // }

  // Format the amount with commas and specified decimals
  const formattedAmount =
    currency +
    ' ' +
    numericAmount.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return formattedAmount;
};

export function extractCurrencies(walletData: any) {
  // Extract currencies from the wallet data
  const currencies = walletData?.map((account: any) => account.currency);

  // Remove duplicate currencies if any
  const uniqueCurrencies = [...new Set(currencies)];

  return uniqueCurrencies;
}
export function extractCurrenciesAndFlags(walletData: any) {
  // Extract currencies from the wallet data
  const currencies = walletData?.map((account: any) => ({
    currency: account.currency || account.ref_code,
    flag: account.flag_url || account.url,
  }));

  // Remove duplicate currencies if any
  const uniqueCurrencies = currencies?.filter(
    (currency: any, index: number, self: any[]) =>
      index === self.findIndex((c: any) => c.currency === currency.currency),
  );

  return uniqueCurrencies;
}

export function filterWalletsByCurrency(
  walletData: any,
  targetCurrency: string | unknown,
) {
  // Filter wallets based on the target currency
  const filteredWallets = walletData?.filter(
    (account: any) => account?.currency === targetCurrency,
  );

  // Return the first matching wallet object, or null if not found
  return filteredWallets?.[0] || null;
}

export interface ExchangeData {
  base: string;
  target: string;
  rate: number;
  fee?: string;
}

export const updateExchangeFields = (
  value: string,
  field: 'base' | 'target',
  exchangeData: ExchangeData,
): ExchangeData => {
  const {base, target, rate} = exchangeData;
  let newBase: string = base;
  let newTarget: string = target;

  if (field === 'base') {
    if (value === '') {
      newBase = '';
      newTarget = '';
    } else {
      const newValue = parseFloat(value) * rate;
      newBase = value;
      newTarget = newValue.toString();
    }
  } else {
    if (value === '') {
      newBase = '';
      newTarget = '';
    } else {
      const newValue = parseFloat(value) / rate;
      newTarget = value;
      newBase = newValue.toString();
    }
  }

  return {base: newBase, target: newTarget, rate};
};

export function formatDate(dateString: Date | string, full?: boolean) {
  const date = new Date(dateString);

  if (!full) {
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      // timeZoneName: 'short',
    });
  } else {
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
    });
  }
}

export function getInitials(firstName?: string, lastName?: string) {
  const firstInitial = firstName?.[0]?.toUpperCase() || '';
  const lastInitial = lastName?.[0]?.toUpperCase() || '';
  return `${firstInitial}${lastInitial}`;
}
