import Vue from 'vue'

Vue.filter('capitalize', val => val.toUpperCase())
Vue.filter('stripTags', val => val.replace(/(<([^>]+)>)/ig, ''))
