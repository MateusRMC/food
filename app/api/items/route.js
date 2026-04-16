import { supabase } from "@/app/lib/supabase";
import { NextResponse } from "next/server";

export async function GET() {
  const { data, error } = await supabase
    .schema("food")
    .from("items")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message });
  }

  return NextResponse.json(data);
}

export async function POST(req) {
  const body = await req.json();

  const { data, error } = await supabase.schema("food").from("items").insert({
    name: body.name,
    kcal: body.kcal,
    fat: body.fat,
    carb: body.carb,
    protein: body.protein,
    potassium: body.potassium,
    sodium: body.sodium,
  });

  if (error) {
    return NextResponse.json({ error: error.message });
  }

  return NextResponse.json(data);
}
