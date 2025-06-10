import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import { NextRequest } from "next/server";
import { botService } from "@/lib/services/bot.service";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  const data = await req.json();

  if (!data.amount || typeof data.amount !== "number") {
    return new Response("InvalidAmount", {
      status: 400,
    });
  }

  try {
    const link = await botService.createPaymentLink({ amount: data.amount });
    return Response.json({ link, amount: data.amount });
  } catch (error) {
    console.error(error);
    return new Response("InternalServerError", {
      status: 500,
    });
  }
}
