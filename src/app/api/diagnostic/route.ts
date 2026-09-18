import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { businessName, businessType, acquisitionChannels, primaryProblem, name, whatsapp, email } = body;

    // Basic validation
    if (!name || !whatsapp || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      // Supabase not configured yet — log and return success for now
      console.log("Diagnostic submission (Supabase not configured):", {
        businessName, businessType, acquisitionChannels, primaryProblem, name, whatsapp, email,
      });
      return NextResponse.json({ ok: true });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase.from("leads").insert({
      name,
      email,
      whatsapp,
      company: businessName,
      business_type: businessType,
      acquisition_channels: acquisitionChannels,
      primary_problem: primaryProblem,
      source: "diagnostic-form",
      created_at: new Date().toISOString(),
    });

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Diagnostic API error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
