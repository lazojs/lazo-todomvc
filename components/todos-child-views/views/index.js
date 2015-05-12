/*global define, LAZO */
/*jshint unused:false */
define(['l!lazoCollectionView', 'underscore'], function (View, _) {

    'use strict';

    return View.extend({

        viewDefinitions: {
            header: 'a:header',
            footer: 'a:footer'
        },

        events: {
            'click #toggle-all': 'toggle',
        },

        // pull in collection instance from component context
        collection: 'todos',

        // use app/views/todo.js && todo.hbs
        itemView: 'a:todo',

        afterRender: function () {
            this.$allCheckbox = this.$('#toggle-all');
        },

        toggle: function (e) {
            this.collection.each(function (todo) {
                todo.save({
                    'completed': e.target.checked
                });
            });
        }

    });

});