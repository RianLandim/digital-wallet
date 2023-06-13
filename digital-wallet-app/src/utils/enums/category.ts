import { z } from "zod";

export const categoryEnum = z.enum(["Fixas", "Lazer", "Contas", "Boletos", "Entreterimento", "Salário"])