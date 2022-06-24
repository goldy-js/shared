import crypto from "crypto"

crypto.randomBytes(96 / 2, (err, buf) => {
  if (err) throw err
  // eslint-disable-next-line no-console
  console.log(`${buf.length} bytes of random data: ${buf.toString("hex")}`)
})
