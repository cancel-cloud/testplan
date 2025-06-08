import { NextRequest, NextResponse } from "next/server";
import { fetchSubstitutions, SubstitutionRequest } from "@/lib/getSubstitutions";

export async function POST(req: NextRequest) {
  const body: SubstitutionRequest = await req.json();
  try {
    const data = await fetchSubstitutions(body);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
