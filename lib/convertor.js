const DHURKI_IN_DISMIL = 128
const DHURKI_IN_ACRE = DHURKI_IN_DISMIL * 100

function fromDhurki(dhurki) {
  let remainingDhurki = dhurki
  const bigha = Math.floor(remainingDhurki / Math.pow(20, 3))
  remainingDhurki = remainingDhurki % Math.pow(20, 3)
  const katka = Math.floor(remainingDhurki / Math.pow(20, 2))
  remainingDhurki = remainingDhurki % Math.pow(20, 2)
  const dhur = Math.floor(remainingDhurki / 20)
  remainingDhurki = remainingDhurki % 20
  return {
    bigha,
    katka,
    dhur,
    dhurki: remainingDhurki,
  }
}

export function fromDismil(dismil) {
  return fromDhurki(dismil * 128)
}

export function fromAcre(acre, dismil) {
  return fromDhurki(acre * DHURKI_IN_ACRE + (dismil || 0) * DHURKI_IN_DISMIL)
}
