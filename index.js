import readlineSync from 'readline-sync'
import chalk from 'chalk'
class historia {
    constructor (quem , desejo, paraQue){
        this.quem = quem
        this.desejo=desejo
        this.paraQue=paraQue
    }
}
let quem = readlineSync.question('Quem?\n')
let desejo = readlineSync.question('O que deseja?\n')
let paraQue = readlineSync.question('para que?\n')
const toDo = new historia(quem, desejo, paraQue)
console.log('Como '+chalk.blue(toDo.quem)+' eu desejo '+chalk.blue(toDo.desejo)+' para '+chalk.blue(toDo.paraQue))