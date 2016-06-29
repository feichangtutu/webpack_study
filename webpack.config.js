/**
 * Created by jyn on 16/2/29.
 */
module.exports= {
    entry:'./entry.js',
    output:{
        path:__dirname,
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {test:/\.js$/,loader:'babel'},
            {test:/\.css$/,loader:'style!css'}
        ]
    }
}