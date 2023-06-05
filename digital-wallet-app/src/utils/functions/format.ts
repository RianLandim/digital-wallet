import "intl";
import "intl/locale-data/jsonp/pt-BR";

export function dateFormat(date: Date) {
  return new Intl.DateTimeFormat("pt-BR", {
    month: "long",
  })
    .format(date)
    .replace(/\b\w/g, (v) => v.toUpperCase());
}

export function currencyFormat(currency: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumSignificantDigits: 2,
  }).format(currency);
}
