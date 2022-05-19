import { message, notification } from 'antd';

export const iconColor = '#1890ff';

export const formatListingPrice = (price: number, round = true) => {
  const formattedListingPrice = round ? Math.round(price / 100) : price / 100;
  return `$${formattedListingPrice}`;
};

export const displaySuccessNotification = (message: string, description?: string) => {
  return notification['success']({
    message,
    description,
    placement: 'topLeft',
    style: {
      marginTop: 50,
    },
  });
};

export const displayErrorMessage = (error: string) => {
  return message.error(error);
};

export const convertToRupiah = (angka: string | number): string => {
  let rupiah = '';
  const angkarev = angka.toString().split('').reverse().join('');
  for (let i = 0; i < angkarev.length; i++) if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.';
  return (
    'Rp. ' +
    rupiah
      .split('', rupiah.length - 1)
      .reverse()
      .join('')
  );
};

export const convertToAngka = (rupiah: string): number => {
  return parseInt(rupiah.replace(/,.*|[^0-9]/g, ''), 10);
};

export const transformImagePath = (url: string, size: string): string => {
  const splitted = url.split('upload/');

  return `${splitted[0]}upload/${size}/mock${splitted[1].split('/mock')[1]}`;
};
