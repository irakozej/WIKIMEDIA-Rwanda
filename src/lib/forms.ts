export const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

export type FormStatus = "idle" | "sending" | "sent" | "error";

export async function submitForm(payload: Record<string, unknown>): Promise<FormStatus> {
  // No key configured — pretend-submit so the UI still works in demos.
  if (!WEB3FORMS_KEY) {
    await new Promise((r) => setTimeout(r, 400));
    return "sent";
  }
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ access_key: WEB3FORMS_KEY, ...payload }),
    });
    return res.ok ? "sent" : "error";
  } catch {
    return "error";
  }
}
