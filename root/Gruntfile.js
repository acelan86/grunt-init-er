'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    logo :  ' * \n' + 
            ' *                          $$!   ;$;\n' +                      
            ' *                    !$  $$$$  !$$$   ;;\n' +                   
            ' *                 $ *$$;$$$$$$$$$$;*$$$\n' +                   
            ' *                $$$$$$$$$$$$$$$$$$$$$\n' +                    
            ' *               $$$$$$;         o$$$$$o\n' +                   
            ' *              *$$$   *#####;     $$$$$\n' +                   
            ' *              $$$   &#$*!###     $$$$!\n' +                   
            ' *              $$$;  $#!!###$   ;$$$$\n' +                    
            ' *                $$$o  ;**   !$$$$!\n' +                      
            ' *          !$&&&&$!  o$$$$$$o;   ;$&###&!     ;o$&&##&$;\n' + 
            ' *       ###########$ o####*  #############!  o############\n' + 
            ' *     ;#####;        #####  $####    *####;          ####*\n' + 
            ' *      ###########  o####   ####;    ####$  $######;o####\n' + 
            ' *          ;*#####o ####$  ####&    !#### o####     ####\n' +  
            ' *    ####$**&####$ ;####  o####     ####o &####$o$#####\n' +  
            ' *   ;o########$    *###   ####!    &####   ;######&!\n' +     
            ' *                 ###;\n' +                                 
            ' *                  ##o\n' +                                   
            ' *                 ;#!\n' +                                     
            ' *                 ;\n' + 
            ' *\n',
    // Task configuration.
    copy: {
      cssimg : {
        files:[
          {expand: true, cwd: 'src/core/esui/css/img/', dest: 'release/img/', src: ['**']},
          {expand: true, cwd: 'src/css/img/', dest: 'release/img/', src: ['**']}
        ]
      }
    },
    sass: {
      dist : {
        files: [
          {expand: true, cwd: 'src/css/', ext: '.css', dest: 'src/css/', src: ['**/*.scss']}
        ]
      }
    },
    imagemin: {                          // Task
      dist: {                            // Target
        options: {                       // Target options
          optimizationLevel: 3
        },
        files: [
          {expand: true, cwd: 'release/img/', dest: 'release/img/', src: ['**/*.png']}
        ]
      }
    },
    jshint : {
      options : {
        "bitwise": false,
        "curly": true,
        "eqeqeq": true,
        "forin": false,
        "immed": true,
        "latedef": true,
        "newcap": true,
        "noarg": true,
        "noempty": true,
        //"nonew": true,
        "plusplus": false,
        "regexp": true,
        "undef": true,
        "unused": true,
        "strict": true,
        "trailing": true,
        // "camelcase": true,
        // "quotmark": true,
        "asi": false,
        "boss": false,
        "debug": false,
        "eqnull": false,
        "esnext": true,
        "evil": true,
        "es3":true,
        "expr": true,
        "funcscope": false,
        "globalstrict": false,
        "iterator": false,
        "lastsemic": false,
        "laxbreak": false,
        "laxcomma": false,
        "loopfunc": false,
        "multistr": false,
        "onecase": false,
        "proto": false,
        "regexdash": false,
        "scripturl": true,
        "smarttabs": false,
        "shadow": false,
        "sub": false,
        "supernew": false,
        "validthis": false,
        "browser": true,
        "couch": false,
        "devel": false,
        "node": true,
        "nonstandard": false,
        "rhino": false,
        "wsh": false,
        "worker": true,
        "nomen": false,
        "onevar": false,
        "passfail": false,
        //"white": true,
        "maxerr": 100,
        //"maxlen": 100,
        "maxparams": 10,
        "maxdepth": 10,
        //"indent": 4
      },
      files: ['src/business/**/*.js'],
    },
    concat: {
      options: {
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
    "src/common/**/*.js",
    "src/business/<%= pkg.name %>.js",
          "src/business/*.js",
          "src/business/**/*.js"
        ],
      },
      css: {
        dest : 'release/<%= pkg.name %>.css',
        src : [
          "src/css/base.css",

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

          "src/css/*.css",
          "src/css/**/*.css"
        ]
      },
      tpl: {
        dest: 'release/<%= pkg.name %>.tpl',
        src: ["src/business/**/*.tpl"]
      }
    },
    uglify: {
      options: {
        banner: '/*!\n' + 
                ' * sinaadToolkit\n' +
                ' * @author acelan <xiaobin8[at]staff.sina.com.cn> yudong<yudong3[at]staff.sina.com.cn>\n' +
                ' * @version <%= pkg.version %>\n' +
                '<%= logo %>' + 
                ' */\n',
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
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task.
  grunt.registerTask('default', ['copy', 'sass', 'imagemin', 'jshint', 'concat', 'connect', 'uglify', 'watch']);
  grunt.registerTask('nouglify', ['copy', 'sass', 'imagemin', 'jshint', 'concat', 'connect', 'watch']);
  grunt.registerTask('nowatch', ['copy', 'sass', 'imagemin', 'jshint', 'concat', 'connect', 'uglify']);

};
