// FUNCIONES FLECHA Y THIS

const serie1 = {
  numEmpisodios: 100,
  episodiosVistos: 80,
  verEpisodio: function () {
    this.episodiosVistos++;
    console.log(this) // serie1
  }
}

serie1.verEpisodio()

const serie2 = {
  numEmpisodios: 100,
  episodiosVistos: 80,
  verEpisodio: () => {
    this.episodiosVistos++;
    console.log(this) // window
  }
}

serie2.verEpisodio()

// CHAINING OPERATOR ?

const persona = {
  telefonos: {
    movil: {
      prefijo: '+34',
      numero: 666777888
    },
    fijo: {
      prefijo: '+34',
      numero: 966777888
    }
  }
}

const persona1 = {
  telefonos: {
    movil: {
      prefijo: '+34',
      numero: 666777888
    }
  }
}

function getNumFijo(persona) {
  if (persona && persona.telefonos && persona.telefonos.fijo) {
    console.log(persona.telefonos.fijo.numero)
  }
}

function getNumFijoConChainingOp(persona) {
  console.log(persona?.telefonos?.fijo?.numero)
}

getNumFijo(persona)
getNumFijo(persona1)


// NULLISH COALLESCENCE ??

const a = '';
if (a) {
  console.log('Pasa por el IF')
} else {
  console.log('Pasa por el ELSE')
}

const b = 0
// const b = null
const msg = b || 'Valor por defecto'
console.log(msg)
