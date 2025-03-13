import { readDb } from "$lib/get_stocks";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
  return { database: readDb() };
};
