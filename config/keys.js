if(process.env.NODE_ENV === 'production'){
  module.exports = require('./prod')
}else{
  module.exports = require('./dev')
}


//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