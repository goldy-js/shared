import Base from "../Base"

export default abstract class Factory extends Base {
  static make<T extends Factory>(
    this: { new (...params: any[]): T },
    ...params: any[]
  ): ReturnType<T["make"]> {
    return new this(...params).make()
  }

  abstract make(): any
}
