import missionsData from "@/data/missions.json";
import { notFound } from "next/navigation";

// @ts-ignore - Mock typing
const missions: Record<string, any> = missionsData;

export default async function MissionTrackerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const mission = missions[id];

  if (!mission) {
    notFound();
  }

  return (
    <main className="container section" style={{ minHeight: "100vh" }}>
      {/* ── Header ── */}
      <div style={{ marginBottom: "3rem" }}>
        <p className="section__label">// tracker_client</p>
        <h1 className="section__title">Mission : {mission.title}</h1>
        <p className="section__desc" style={{ marginBottom: "1rem" }}>
          Client : <span style={{ color: "var(--text-primary)" }}>{mission.client}</span><br />
          Début : <span style={{ fontFamily: "var(--font-mono)", color: "var(--text-primary)" }}>{mission.startDate}</span><br />
          Statut :{' '}
          <span style={{ color: "var(--cyan-primary)" }}>
            {mission.status === "in_progress" ? "EN COURS" : mission.status.toUpperCase()}
          </span>
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}>
        {/* ── Progress Bar ── */}
        <div className="service-card" style={{ padding: "1.5rem 2rem" }}>
          <h3 className="service-card__title" style={{ marginBottom: "1rem" }}>
            Avancement Global ({mission.progress}%)
          </h3>
          <div
            style={{
              width: "100%",
              height: "8px",
              background: "var(--bg-void)",
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${mission.progress}%`,
                height: "100%",
                background: "var(--cyan-primary)",
                boxShadow: "0 0 10px var(--cyan-glow)",
                transition: "width 1s ease",
              }}
            />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
          {/* ── Objectifs & Tarification ── */}
          <div className="service-card">
            <h3 className="service-card__title">Objectifs & Périmètre</h3>
            <ul style={{ listStyle: "none", marginTop: "1.5rem" }}>
              {mission.objectives.map((obj: any, index: number) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.75rem 0",
                    borderBottom: index < mission.objectives.length - 1 ? "1px solid var(--border-subtle)" : "none",
                    color: obj.status === "completed" ? "var(--text-secondary)" : "var(--text-primary)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <span
                      style={{
                        color:
                          obj.status === "completed"
                            ? "var(--cyan-dim)"
                            : obj.status === "in_progress"
                            ? "var(--orange-pr)"
                            : "var(--text-muted)",
                      }}
                    >
                      [{obj.status === "completed" ? "x" : obj.status === "in_progress" ? "/" : " "}]
                    </span>
                    <span style={{ textDecoration: obj.status === "completed" ? "line-through" : "none" }}>
                      {obj.name}
                    </span>
                  </div>
                  {obj.price > 0 && (
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--cyan-primary)" }}>
                      {obj.price}€
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Journal Quotidien ── */}
          <div className="service-card">
            <h3 className="service-card__title">Journal de Bord</h3>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
              Comptes-rendus réguliers sur l'avancée technique.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {mission.journals.map((journal: any, index: number) => (
                <div key={index} style={{ borderLeft: "2px solid var(--border-active)", paddingLeft: "1.25rem" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--cyan-primary)" }}>
                    {new Date(journal.date).toLocaleDateString("fr-FR")}
                  </div>
                  <div style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginTop: "0.5rem", lineHeight: "1.6" }}>
                    {journal.message}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Facturation (Spoiler Discret) ── */}
        <details className="service-card" style={{ marginTop: "1rem", cursor: "pointer" }}>
          <summary style={{ fontSize: "0.9rem", color: "var(--text-muted)", listStyle: "none", outline: "none" }}>
            <span style={{ fontFamily: "var(--font-mono)", borderBottom: "1px dashed var(--text-muted)", paddingBottom: "2px" }}>
              Afficher les informations de facturation
            </span>
          </summary>
          
          <div style={{ marginTop: "1.5rem", cursor: "default" }}>
            <h3 className="service-card__title">Facturation & Règlements</h3>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
              Le règlement des missions s'effectue usuellement par virement bancaire sur réception de la facture.
            </p>
            
            {mission.invoices.map((inv: any, index: number) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1rem",
                  background: "var(--bg-card-hover)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div>
                  <span style={{ border: "1px solid var(--text-muted)", padding: "0.15rem 0.4rem", marginRight: "1rem", fontSize: "0.7rem", fontFamily: "var(--font-mono)" }}>
                    {inv.status === "pending" ? "EN ATTENTE" : "RÉGLÉE"}
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", color: "var(--text-primary)" }}>
                    {inv.id}
                  </span>{" "}
                  <span style={{ color: "var(--text-secondary)" }}>— {inv.amount}€</span>
                </div>
                <div>
                  {inv.status === "pending" && (
                    <span style={{ fontSize: "0.8rem", color: "var(--cyan-primary)" }}>
                      Facture émise prochainement
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </details>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(missionsData).map((id) => ({
    id: id,
  }));
}
