const data = await db.collection("messages").get();
const response = await ai.generate({
  input: data
});
await db.collection("results").add({
  output: response
});