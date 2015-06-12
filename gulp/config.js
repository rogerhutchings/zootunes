'use strict';

var path = require('path');

var root = path.normalize(__dirname + '/..');

module.exports = {

    production: process.env.NODE_ENV === 'production',

    port: process.env.PORT || 9000,

    harp: {
        src: root
    },

    stylus: {
        src: root + '/public/_stylus/**/*.styl'
    },

    css: {
        watch: root + '/public/style.css'
    },

    build: {
        dest: root + '/build'
    },

    remote: {
        server: 'balzan.new.ox.ac.uk',
        path: '/srv/www/htdocs',
        username: 'ddarg'
    },

    templates: {
        watch: root + '/public/**/*.ejs'
    }

};
