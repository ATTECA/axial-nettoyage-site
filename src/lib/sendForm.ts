// Sends a form to Web3Forms without leaving the page, then shows a message.
// Used by /devis and /contact. Without JavaScript, the forms still work
// (normal POST to Web3Forms).
//
// The form needs:
// - a submit button containing an element with [data-label] (its text)
// - an element with [data-result] for the message
// - optionally fieldsets with [data-required-group] (checkbox groups where
//   at least one box must be ticked) and a .group-error inside

interface Options {
  // Email subject, built from the form's values
  subject: (values: Record<string, string>) => string;
  success: string;
  sendingLabel?: string;
}

export function sendForm(form: HTMLFormElement, options: Options) {
  const result = form.querySelector<HTMLElement>("[data-result]")!;
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
  const label = button.querySelector<HTMLElement>("[data-label]")!;
  const idleLabel = label.textContent ?? "";

  const show = (ok: boolean, text: string) => {
    result.textContent = text;
    result.className = `mt-4 rounded-2xl px-4 py-3 font-medium ${ok ? "bg-accent/25 text-ink" : "bg-red-50 text-red-700"}`;
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Checkbox groups that need at least one ticked box
    for (const group of form.querySelectorAll<HTMLElement>("[data-required-group]")) {
      const ticked = group.querySelectorAll("input:checked").length > 0;
      group.querySelector(".group-error")?.classList.toggle("hidden", ticked);
      if (!ticked) {
        group.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
    }

    button.disabled = true;
    label.textContent = options.sendingLabel ?? "Envoi en cours…";

    // Several ticked boxes with the same name -> one line "A, B, C"
    const values: Record<string, string> = {};
    for (const [key, value] of new FormData(form).entries()) {
      values[key] = values[key] ? `${values[key]}, ${value}` : String(value);
    }
    values.subject = options.subject(values);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      const json = await response.json();
      if (!json.success) throw new Error(json.message);
      form.reset();
      show(true, options.success);
    } catch {
      show(false, "L’envoi n’a pas fonctionné. Réessayez, ou appelez-nous directement.");
    } finally {
      button.disabled = false;
      label.textContent = idleLabel;
    }
  });
}
