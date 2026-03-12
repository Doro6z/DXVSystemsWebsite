import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    console.log(`[ACC Webhook] Received update for mission ${id}:`, body);

    /* 
      Expected payload from ACC (MVP-1 Updated):
      {
        "progress": 75,
        "newJournal": "Mise à jour quotidienne : Le composant de combat est fonctionnel avec les montages d'animation de base.",
        "completedObjectiveIndex": 0
      }
    */

    const dbPath = path.join(process.cwd(), "src/data/missions.json");
    if (fs.existsSync(dbPath)) {
      const fileContent = fs.readFileSync(dbPath, "utf-8");
      const db = JSON.parse(fileContent);

      if (db[id]) {
        // Update global progress
        if (body.progress !== undefined) {
          db[id].progress = body.progress;
        }
        
        // Add a new daily journal entry
        if (body.newJournal) {
          db[id].journals.unshift({
            date: new Date().toISOString(),
            type: "update",
            message: body.newJournal
          });
        }
        
        // Mark a specific objective as completed
        if (body.completedObjectiveIndex !== undefined && db[id].objectives[body.completedObjectiveIndex]) {
          db[id].objectives[body.completedObjectiveIndex].status = "completed";
        }
        
        fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
      }
    }

    return NextResponse.json({ success: true, message: "Mission updated successfully by ACC" });
  } catch (error) {
    console.error("[ACC Webhook] Error:", error);
    return NextResponse.json({ success: false, error: "Bad Request" }, { status: 400 });
  }
}
