export const generateOtp = () => {
  let otp = ""
  for (let i = 0; i < 4; i++) {
    const char = Math.floor(Math.random() * 10)
    otp += char
  }

  return otp
}
