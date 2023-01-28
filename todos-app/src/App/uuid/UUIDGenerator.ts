function GenerateUUID(): string {
  let result = "";
  const letters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 10; i++) {
    result += letters.charAt(Math.floor(Math.random() * letters.length));
  }

  return result;
}
export default GenerateUUID;
