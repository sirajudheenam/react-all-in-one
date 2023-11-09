const data = {
  abc: 'abc',
  bcd: {
    def: 'def',
    ghi: 'ghi',
  },
};

console.log(`data keys: ${Object.keys(data)}`);
console.log(`data values: ${Object.values(data)}`);

for (const [key, value] of Object.entries(data)) {
  console.log(`${key}: ${value}`);
  for (const [k1, v1] of Object.entries(value)) {
    console.log(`${k1}: ${v1}`);
  }
}
