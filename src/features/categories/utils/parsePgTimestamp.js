export function parsePgTimestampToMs(val) {
  if (!val) return 0;
  if (val instanceof Date) return val.getTime();

  let s = String(val).trim();
  s = s.replace(" ", "T").replace(/(\.\d{3})\d+$/, "$1");

  const parsed = Date.parse(s);
  if (!isNaN(parsed)) return parsed;

  const m = s.match(
    /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,3}))?$/
  );
  if (m) {
    const [, Y, Mo, D, H, Mi, Se, Ms = "0"] = m;
    return new Date(+Y, +Mo - 1, +D, +H, +Mi, +Se, +Ms).getTime();
  }
  return 0;
}
