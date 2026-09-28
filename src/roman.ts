const TABLE: ReadonlyArray<readonly [number, string]> = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
]

const CANONICAL = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/

export function toRoman(n: number): string {
  if (!Number.isInteger(n) || n < 1 || n > 3999) throw new RangeError(`toRoman: expected an integer from 1 to 3999, got ${n}`)
  let out = ''
  let rest = n
  for (const [value, symbol] of TABLE) {
    while (rest >= value) {
      out += symbol
      rest -= value
    }
  }
  return out
}

export function fromRoman(s: string): number {
  if (typeof s !== 'string' || s === '' || !CANONICAL.test(s)) throw new SyntaxError(`fromRoman: not a canonical Roman numeral: ${JSON.stringify(s)}`)
  let n = 0
  let i = 0
  for (const [value, symbol] of TABLE) {
    while (s.startsWith(symbol, i)) {
      n += value
      i += symbol.length
    }
  }
  return n
}
