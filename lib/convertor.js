const DHURKI_IN_DISMIL = 128
const SQFT_IN_DISMIL = 435.6
const DHURKI_IN_ACRE = DHURKI_IN_DISMIL * 100

function fix(digit) {
  if (Number.isSafeInteger(digit)) {
    return digit
  } else {
    return digit.toFixed(2)
  }
}

function fromDhurki(dhurki) {
  let remainingDhurki = dhurki
  const bigha = Math.floor(remainingDhurki / Math.pow(20, 3))
  remainingDhurki = remainingDhurki % Math.pow(20, 3)
  const katka = Math.floor(remainingDhurki / Math.pow(20, 2))
  remainingDhurki = remainingDhurki % Math.pow(20, 2)
  const dhur = Math.floor(remainingDhurki / 20)
  remainingDhurki = remainingDhurki % 20
  return {
    Bigha: fix(bigha),
    Katka: fix(katka),
    Dhur: fix(dhur),
    Dhurki: fix(remainingDhurki),
  }
}

export function fromDismil(dismil) {
  return fromDhurki(dismil * 128)
}

export function fromAcre(acre, dismil) {
  console.log(
    acre,
    dismil,
    acre * DHURKI_IN_ACRE + (dismil || 0) * DHURKI_IN_DISMIL
  )
  return fromDhurki(acre * DHURKI_IN_ACRE + (dismil || 0) * DHURKI_IN_DISMIL)
}

export function toSqft(acre, dismil) {
  return ((acre * 100 + dismil) * SQFT_IN_DISMIL).toFixed(2)
}
