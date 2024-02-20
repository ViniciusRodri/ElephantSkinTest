import { DateTime } from 'luxon';

// ==============
// Moeda
// ==============
export const { format: formatPrice } = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
});

// ==============
// Data e hora
// ==============
export const getDate = (): string => {
  return DateTime.local().toFormat('dd/LL/yyyy');
};

export const getYear = (): number => {
  return DateTime.local().year;
};

export const formatDate = (date: string, withYear: boolean = true): string => {
  if (withYear) {
    return DateTime.fromISO(date).toFormat('dd/LL/yyyy');
  } else {
    return DateTime.fromISO(date).toFormat('dd/LL');
  }
};

export const formatTime = (date: string): string => {
  return DateTime.fromISO(date).toFormat('HH:mm');
};

export const formatDateTime = (date: string | any): string => {
  return DateTime.fromISO(date).toFormat('dd/LL/yyyy HH:mm');
};

export const formatDateDatabase = (date: string): string => {
  return DateTime.fromFormat(date, 'dd/LL/yyyy').toFormat('yyyy-LL-dd');
};

export const formatDateTimeDatabase = (date: string): string => {
  return DateTime.fromFormat(date, 'dd/LL/yyyy HH:mm').toFormat('yyyy-LL-dd HH:mm');
};

// ==============
// Utilitários
// ==============
export const getRandomId = () => {
  return `${Math.random() * (100 - 2000) + 100}`;
};

export const formatCNPJ = (value: string) => {
  return value?.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
};

export const formatCPF = (value: string) => {
  return value.replaceAll('.', '').replaceAll('-', '');
};

export const formatPhone = (value: string) => {
  return value.replaceAll('(', '').replaceAll(')', '').replaceAll('-', '').replaceAll(' ', '');
};

// export const formatCPF = (value: string) => {
//   return value
//     ?.replace(/(\d{3})(\d)/, '$1.$2')
//     .replace(/(\d{3})(\d)/, '$1.$2')
//     .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
// };

// export const formatPhone = (value: string) => {
//   return value?.replace(/^(\d{2})(\d)/g, '($1) $2').replace(/(\d)(\d{4})$/, '$1-$2');
// };

export const formatNumberRound = (value?: number) => {
  if (!value) {
    return 0;
  }
  const math = Number((Math.abs(value) * 100).toPrecision(15));
  return (Math.round(math) / 100) * Math.sign(value);
};

export const trimNumber = (param: string): string => {
  return param?.replace(/[^0-9]/g, '');
};
