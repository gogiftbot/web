import { tonService } from "@/lib/services/ton.service";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log(data);

  try {
    await tonService.onDepositTx();
    return new Response("ok", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("InternalServerError", {
      status: 500,
    });
  }
}
