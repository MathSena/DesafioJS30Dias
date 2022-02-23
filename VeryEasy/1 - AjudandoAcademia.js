function mediaAlunos(qtdAlunos) {
  // let sum = 0

  // qtdAlunos.forEach(number => {
  //  sum = sum + number
  //})

  const sum = qtdAlunos.reduce((accum, number) => {
    return accum + number
  }, 0)

  ///const media = sum / qtdAlunos.length

  return sum / qtdAlunos.length

  return media
}

console.log(mediaAlunos([10, 5, 10, 10, 10]))
