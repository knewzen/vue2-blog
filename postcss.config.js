/**
 * Created by stevie on 2016/12/11.
 */
module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: [
                // 'last 2 versions',
                'ie >= 8',
                'ie_mob >= 10',
                'ff >= 26',
                'chrome >= 30',
                'safari >= 6',
                'opera >= 23',
                'ios >= 5',
                'android >= 2.3',
                'bb >= 10',
            ]
        }),
    ]
}
