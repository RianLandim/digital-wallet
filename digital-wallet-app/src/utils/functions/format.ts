import "intl";
import "intl/locale-data/jsonp/pt-BR";

export function dateMonthFormat(date: Date) {
  return new Intl.DateTimeFormat("pt-BR", {
    month: "long",
  })
    .format(date)
    .replace(/\b\w/g, (v) => v.toUpperCase());
}

export function dateFullFormat(date: Date) {
  return new Intl.DateTimeFormat("pt-BR", {
    month: "short",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
  }).format(date);
}

export function currencyFormat(currency: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(currency);
}
