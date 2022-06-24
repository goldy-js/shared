import Base from "../Base"

export default abstract class Service extends Base {
  static call<T extends Service>(
    this: { new (...params: any[]): T },
    ...params: any[]
  ): ReturnType<T["call"]> {
    return new this(...params).call()
  }

  abstract call(): any
}
