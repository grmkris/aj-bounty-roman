import { describe, expect, it } from 'bun:test'
import { fromRoman, toRoman } from '../src/roman.ts'

describe('roman', () => {
  it('toRoman', () => {
    expect(toRoman(1)).toBe('I')
    expect(toRoman(4)).toBe('IV')
    expect(toRoman(9)).toBe('IX')
    expect(toRoman(40)).toBe('XL')
    expect(toRoman(1994)).toBe('MCMXCIV')
    expect(toRoman(3999)).toBe('MMMCMXCIX')
  })
  it('range', () => {
    for (const n of [0, -1, 4000, 1.5, Number.NaN]) expect(() => toRoman(n)).toThrow(RangeError)
  })
  it('fromRoman canonical only', () => {
    expect(fromRoman('MCMXCIV')).toBe(1994)
    for (const s of ['IIII', 'VX', 'IC', '', 'mcm', 'MMMM', 'XIIV']) expect(() => fromRoman(s)).toThrow(SyntaxError)
  })
  it('round trip', () => {
    for (let n = 1; n <= 3999; n++) expect(fromRoman(toRoman(n))).toBe(n)
  })
})
