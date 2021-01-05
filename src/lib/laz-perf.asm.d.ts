declare module 'lib/laz-perf.asm' {
  // Represents an offset into the HEAPU8.
  type Pointer = number

  class LASZip {
    constructor()
    open(pointer: Pointer, length: number): void
    delete(): void
    getPoint(pointer: Pointer): void
  }

  class HEAPU8 {
    static buffer: ArrayBuffer
    static set(buffer: ArrayBuffer, pointer: Pointer): void
  }

  function _free(pointer: Pointer): void
  function _malloc(length: number): Pointer
}
