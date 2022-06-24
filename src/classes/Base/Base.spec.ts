import Base from "./Base"

describe("Base", describeBase)

function describeBase() {
  it("prettyClassName", itPrettyClassName)

  it("variables", itVariables)

  it("logPrefix", itLogPrefix)
}

function itPrettyClassName() {
  class CutFoo extends Base {}

  const instance = new CutFoo()

  expect(instance.prettyClassName).toBe("Cut foo")
}

function itVariables() {
  class CutFoo extends Base {
    a = 1
    b = [2]
    c = "3"
    d = {
      e: 4,
    }
  }

  const instance = new CutFoo()

  expect(instance.variables).toStrictEqual({
    a: 1,
    b: [2],
    c: "3",
    d: {
      e: 4,
    },
  })
}

function itLogPrefix() {
  class CutFoo extends Base {}

  const instance = new CutFoo()

  expect(instance.logPrefix).toBe("[CutFoo]")
}
