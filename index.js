class PersonReal {
    constructor (name) {
        this.name = name
        this.demoArr = []
        this.isRunning = false

        function demo (name) {
            console.log(`${name}`)
        }
        this.demoArr.push(demo.bind(this, name))
        this.runDemo()
    }

    eat (food) {
        const demo = food => {
            console.log('吃 ' + food )
        }
        this.demoArr.push(demo.bind(this, food))
        this.runDemo()
        return this
    }

    sleep (time) {
        const demo = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${time}s后`)
                resolve()
            }, time * 1000)
        })
        this.demoArr.push(demo)
        this.runDemo()
        return this
    }

    sleepFirst (time) {
        const demo = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${time}s后`)
                resolve()
            }, time * 1000)
        })
        this.demoArr.unshift(demo)
        this.runDemo()
        return this
    }

    runDemo () {
        if (this.isRunning) return
        this.isRunning = true

        const goNext = () => {
            if (this.demoArr.length) {
                let demo = this.demoArr.shift()
                if (demo.then) {
                    demo.then(() => {
                        goNext()
                    })
                } else {
                    demo()
                    goNext()
                }
            } else {
                this.isRunning = false
            }
        }
        Promise.resolve().then(() => {
            goNext()
        })
    }
}

function Person (name) {
    return new PersonReal(name)
}
Person('li').sleep(5).eat('东西').sleepFirst(3)