abstract class Base {
  get prettyClassName(): string {
    const name = this.constructor.name
    return (
      name[0] +
      name
        .slice(1)
        .split("")
        .map((c) => (c.match(/[A-Z]/) ? ` ${c.toLowerCase()}` : c))
        .join("")
    )
  }

  get variables(): object {
    return Object.entries(this)._toH()
  }

  get logPrefix(): string {
    return `[${this.constructor.name}]`
  }
}

export default Base
