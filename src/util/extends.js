/**
 * Created by brady on 2019-01-17.
 */

class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
  sayHello () {
    console.log('大家好')
  }
}

class American extends Person {

}

class Chinese extends Person {
  /**
   * @param name 姓名
   * @param age 年龄
   * @param IDNumver 身份证号
   */
  constructor (name, age, IDNumver) {
    super(name, age)
    this.IDNumber = IDNumver
  }
}

const a1 = new American('Jack', 20)
const c1 = new Chinese('zhangsan', 22, '370102198606093714')
console.log(a1)
console.log(c1)


