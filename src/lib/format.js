export function formatDate(dateString) {
  try {
    const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(dateString);
    const date = match
      ? new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]))
      : new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch {
    return dateString;
  }
}
