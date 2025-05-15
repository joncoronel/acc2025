"use server";

import { revalidatePath } from "next/cache";

export async function refreshHomePage() {
  console.log("Refreshing home page");
  revalidatePath("/", "layout");
}
