const unitMap = {
  k: 1000,
  m: 1000000,
  b: 1000000000,
};

function convert(param) {
  const decodedString = decodeURIComponent(param);
  const [numStr] = decodedString.split(/[a-zA-Z]/);
  const num = Number(numStr);

  if (isNaN(num)) return "Invalid number";

  const unitStr = decodedString.replace(/[0-9.]/g, "").toLowerCase();
  const unit = unitMap[unitStr];

  if (!unit && unitStr.length > 0) return "Invalid unit. Please use k, m, or b";

  return (num * (unit || 1)).toLocaleString("en-US");
}

export async function getConversion(ctx, next) {
  const { number } = ctx.params;
  console.log(ctx.params);
  const result = convert(number);
  ctx.response.json({ result });
  await next();
}
