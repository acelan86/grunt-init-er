'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    copy: {
      cssimg : {
        files:[
          {expand: true, cwd: 'src/core/esui/css/img/', dest: 'release/img/', src: ['**']}
        ]
      }
    },
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      js: {
        dest: 'release/<%= pkg.name %>.js',
        src: [
          "src/core/tangram.js",
          /* import er */
          "src/core/er.js",
          "src/core/er/config.js",
          "src/core/er/_util.js",
          "src/core/er/init.js",
          "src/core/er/context.js",
          "src/core/er/template.js",
          "src/core/er/controller.js",
          "src/core/er/locator.js",
          "src/core/er/router.js",
          "src/core/er/Model.js",
          "src/core/er/IAction.js",
          "src/core/er/AbstractAction.js",
          "src/core/er/Action.js",
          "src/core/er/View.js",
          "src/core/er/Module.js",
          "src/core/er/extend.js",
          "src/core/er/extend/action_like_form.js",
          "src/core/er/extend/action_enhance.js",

          /* import esui */
          "src/core/er/extend/ui.js",
          "src/core/esui.js",
          "src/core/esui/config.js",
          "src/core/esui/util.js",
          "src/core/esui/create.js",
          "src/core/esui/dispose.js",
          "src/core/esui/get.js",
          "src/core/esui/init.js",
          "src/core/esui/Control.js",
          "src/core/esui/validator.js",
          "src/core/esui/validator/Rule.js",
          "src/core/esui/validator/Validity.js",
          "src/core/esui/validator/ValidityState.js",
          "src/core/esui/validator/MaxLengthRule.js",
          "src/core/esui/validator/RequiredRule.js",
          "src/core/esui/validator/MaxValueRule.js",
          "src/core/esui/validator/MinValueRule.js",
          "src/core/esui/validator/PatternRule.js",
          "src/core/esui/InputControl.js",
          "src/core/esui/BoxControl.js",
          "src/core/esui/Layer.js",
          "src/core/esui/Button.js",
          "src/core/esui/Calendar.js",
          "src/core/esui/CheckBox.js",
          "src/core/esui/Radio.js",
          "src/core/esui/Dialog.js",
          "src/core/esui/FormTab.js",
          "src/core/esui/Label.js",
          "src/core/esui/Link.js",
          "src/core/esui/MonthView.js",
          "src/core/esui/MiniMultiCalendar.js",
          "src/core/esui/MultiCalendar.js",
          "src/core/esui/Pager.js",
          "src/core/esui/Region.js",
          "src/core/esui/Schedule.js",
          "src/core/esui/Select.js",
          "src/core/esui/SideBar.js",
          "src/core/esui/Tab.js",
          "src/core/esui/Table.js",
          "src/core/esui/TextInput.js",
          "src/core/esui/TextLine.js",
          "src/core/esui/Tip.js",
          "src/core/esui/TreeView.js",

	  "src/business/<%= pkg.name %>.js",
          "src/business/*.js",
          "src/business/**/*.js"
        ],
      },
      css: {
        dest : 'release/<%= pkg.name %>.css',
        src : [
          "src/core/esui/css/ui.css",
          "src/core/esui/css/ui-button.css",
          "src/core/esui/css/ui-cal.css",
          "src/core/esui/css/ui-dialog.css",
          "src/core/esui/css/ui-mask.css",
          "src/core/esui/css/ui-mcal.css",
          "src/core/esui/css/ui-month.css",
          "src/core/esui/css/ui-pager.css",
          "src/core/esui/css/ui-region.css",
          "src/core/esui/css/ui-schedule.css",
          "src/core/esui/css/ui-select.css",
          "src/core/esui/css/ui-sidebar.css",
          "src/core/esui/css/ui-tab.css",
          "src/core/esui/css/ui-table.css",
          "src/core/esui/css/ui-textinput.css",
          "src/core/esui/css/ui-textline.css",
          "src/core/esui/css/ui-tip.css",
          "src/core/esui/css/ui-treeview.css",
        ]
      },
      tpl: {
        dest: 'release/<%= pkg.name %>.tpl',
        src: ["src/business/**/*.tpl"]
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      js: {
        src : '<%= concat.js.dest %>',
        dest : 'release/<%= pkg.name %>.min.js'
      }
    },
    watch: {
      script : {
        files: 'src/**/*',
        tasks: ['copy', 'concat']
      }
    },
    connect: {
      server: {
        options: {
          port: 1234
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task.
  grunt.registerTask('default', ['copy', 'concat', 'uglify', 'connect', 'watch']);

};
